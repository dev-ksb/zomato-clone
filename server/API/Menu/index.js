import express from "express";

import { MenuModel, ImageModel } from "../../database";
import { validateId } from "../../validation/common";

const Router = express.Router();

/**
 * Router	/list
 * Des		get list of menu based on id
 * Params	_id
 * Access	Public
 * Method	GET
 */
Router.get("/list/:_id", async (req, res) => {
  try {
    await validateId(req.params);
    const { _id } = req.params;
    const menus = await MenuModel.findById(_id);
    if (!menus) return res.status(404).json({ error: "No menus found" });

    return res.status(200).json({ menus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Router	/images
 * Des		get list of images based on id
 * Params	_id
 * Access	Public
 * Method	GET
 */
Router.get("/images/:_id", async (req, res) => {
  try {
    await validateId(req.params);
    const { _id } = req.params;
    const images = await ImageModel.findById(_id);
    //TODO: validate images to know image are there or not. Throw error if its valiation fails.

    return res.status(200).json({ images });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default Router;
