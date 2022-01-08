require("dotenv").config();

// import { UserModel } from "./database";
import db from "./database/connection";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import User from "./API/User";
import Order from "./API/Orders";
import Review from "./API/Reviews";

// google authentication config
import googleAuthConfig from "./config/google.config";

// private route authentication config
import privateRouteConfig from "./config/route.config";

const zomato = express();

// passport config
googleAuthConfig(passport);
privateRouteConfig(passport);

// middlewares
zomato.use(cors());
zomato.use(express.json());
zomato.use(helmet());
zomato.use(passport.initialize());
// zomato.use(passport.session());

// Application Routes
zomato.use("/api/v1/auth", Auth);
zomato.use("/api/v1/restaurant", Restaurant);
zomato.use("/api/v1/food", Food);
zomato.use("/api/v1/menu", Menu);
zomato.use("/api/v1/image", Image);
zomato.use("/api/v1/user", User);
zomato.use("/api/v1/order", Order);
zomato.use("/api/v1/review", Review);

const PORT = process.env.PORT || 4000;

zomato.listen(PORT, () => {
  db()
    .then(() => {
      console.log(`Server is running on PORT ${PORT}`);
    })
    .catch((err) => {
      console.error(
        `Server is running on PORT ${PORT}, but database connection failed`,
        err
      );
    });
});
