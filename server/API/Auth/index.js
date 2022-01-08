// Library
import express from "express";
import passport from "passport";

// Models
import { UserModel } from "../../database";

// Validation
import { validateSignIn, validateSignUp } from "../../validation/auth";

// Create a router
const Router = express.Router();

/**
 * Router	/signup
 * Des		Register new user
 * Params	none
 * Access	Public
 * Method	POST
 */
Router.post("/signup", async (req, res) => {
  try {
    const { credentials } = req.body;
    await validateSignUp(credentials);

    await UserModel.findByEmailAndPhone(credentials);

    // save data to DB
    const newUser = await UserModel.create(credentials);

    // generate JWT auth token
    const token = newUser.generateJwtToken();

    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Router	/signin
 * Des		Sign-in with email and password
 * Params	none
 * Access	Public
 * Method	POST
 */
Router.post("/signin", async (req, res) => {
  try {
    const { credentials } = req.body;
    await validateSignIn(credentials);

    const user = await UserModel.findByEmailAndPassword(credentials);
    const token = user.generateJwtToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Router	/google
 * Des		Google Sign-in
 * Params	none
 * Access	Public
 * Method	GET
 */
Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

/**
 * Router	/google/callback
 * Des		Google Sign-in callback
 * Params	none
 * Access	Public
 * Method	GET
 */
Router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    return res
      .status(200)
      .json({ token: req.session.passport.user.token, status: "success" });
  }
);

export default Router;
