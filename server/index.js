require("dotenv").config();

// import { UserModel } from "./database";
import db from "./database/connection";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
// API
import Auth from "./API/Auth";

// google authentication config
import googleAuthConfig from "./config/google.config";

const zomato = express();

googleAuthConfig(passport);

// middlewares
zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());
zomato.use(passport.initialize());
// zomato.use(passport.session());

// Application Routes
zomato.use("/api/v1/auth", Auth);

const PORT = process.env.PORT || 4000;

zomato.listen(PORT, () => {
  db()
    .then(() => {
      console.log(`Server is running on PORT ${PORT}`);
    })
    .catch((err) => {
      console.error(
        `Serve is running on PORT ${PORT}, but database connection failed`,
        err
      );
    });
});
