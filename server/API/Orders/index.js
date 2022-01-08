import express from "express";
import passport from "passport";
import validateUser from "../../config/validateUser";
import { OrderModel } from "../../database";

// validation
import { validateId } from "../../validation/common";

const Router = express.Router();

/**
 * Router	/
 * Des		get all orders based on id
 * Params	_id
 * Access	Private
 * Method	GET
 */
Router.get("/:_id", passport.authenticate("jwt"), async (req, res) => {
  try {
    await validateUser(req, res);

    await validateId(req.params);
    const { _id } = req.params;

    const orders = await OrderModel.findOne({ user: _id });

    if (!orders) return res.status(400).json({ error: "User not found" });

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Router	/new
 * Des		Adding a new order
 * Params	_id
 * Access	Private
 * Method	POST
 */
Router.post("/new/:_id", passport.authenticate("jwt"), async (req, res) => {
  try {
    await validateId(req.params);
    const { _id } = req.params;
    const orderDetails = req.body;

    const order = await OrderModel.findOneAndUpdate(
      { user: _id },
      {
        $push: {
          orderDetails,
        },
      },
      { new: true }
    );

    if (!order) return res.status(400).json({ error: "User not found" });

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default Router;
