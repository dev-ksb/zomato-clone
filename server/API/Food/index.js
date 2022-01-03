import express from "express";

// DB
import { FoodModel } from "../../database";

const Router = express.Router();

/**
 * Router	/r/:_id
 * Des		get all foods based on particular restaurant
 * Params	none
 * Access	Public
 * Method	GET
 */
Router.get("/r/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const foods = await FoodModel.find({ restaurant: _id });

    return res.json({ foods });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Router	/c/:category
 * Des		get all foods based on particular category
 * Params	none
 * Access	Public
 * Method	GET
 */
Router.get("/c/:category", async (req, res) => {
  try {
    const { category } = req.params;

    const foods = await FoodModel.find({
      category: {
        $regex: category,
        $options: "i",
      },
    });

    if (!foods)
      return res
        .status(404)
        .json({ error: `No foods matched with ${category}` });

    return res.json({ foods });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default Router;
