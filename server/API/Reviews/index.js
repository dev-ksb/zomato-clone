import express from "express";

import { ReviewModel } from "../../database";

const Router = express.Router();

/**
 * Router	/:resid
 * Des		get all reviews particular restaurant
 * Params	resid
 * Access	Public
 * Method	GET
 */
Router.get("/:resid", async (req, res) => {
  try {
    const { resid } = req.params;

    const reviews = await ReviewModel.findOne({ restaurant: resid });

    if (!reviews) return res.status(400).json({ error: "No reviews found" });

    res.status(200).json({ reviews });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Router	/new
 * Des		get all reviews particular restaurant
 * Params	null
 * Access	Public
 * Method	POST
 */
Router.post("/new", async (req, res) => {
  try {
    const { reviewData } = req.body;
    await ReviewModel.create(reviewData);

    res.status(200).json({ reviews: "Successfully create a review" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Router	/delete
 * Des		remove review
 * Params	_id
 * Access	Public
 * Method	DELETE
 */
Router.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await ReviewModel.findByIdAndDelete(_id);

    res.status(200).json({ reviews: "Successfully deleted the review" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default Router;
