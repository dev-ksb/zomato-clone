require("dotenv").config();

// import { UserModel } from "./database";
import db from "./database/connection";
import express from "express";
import cors from "cors";
import helmet from "helmet";
const zomato = express();

// middlewares
zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());

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
