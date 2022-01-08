import express from "express";

import { UserModel } from "../../database";
import { validateId } from "../../validation/common";

const Router = express.Router();

/**
 * Router	/:_id
 * Des		Get user by id
 * Params	_id
 * Access	Public
 * Method	GET
 */
Router.get("/:_id", async (req, res) => {
  try {
    await validateId(req.params);
    const { _id } = req.params;

    const user = await UserModel.findById(_id);

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Router	/update
 * Des		Update user data
 * Params	_id
 * Access	Private
 * Method	PUT
 */
Router.put("/update/:_id", async (req, res) => {
  try {
    await validateId(req.params);
    const { _id } = req.params;
    const { userData } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      _id,
      {
        $set: {
          ...userData,
        },
      },
      { new: true }
    );

    res.status(200).json({ user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default Router;
