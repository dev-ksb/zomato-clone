import express from "express";

// DB
import { RestaurantModel } from "../../database";

const Router = express.Router();

/**
 * Router	/
 * Des		restaurants details based on the city
 * Params	none
 * Access	Public
 * Method	GET
 */
Router.get("/", async (req, res) => {
  try {
    //   http://localhost:4000/restaurant/?city=<xyz>
    const { city } = req.query;
    const restaurants = await RestaurantModel.find({ city });
    if (restaurants.length === 0)
      return res
        .status(400)
        .json({ error: "No restaurants found in this city." });

    return res.json({ restaurants });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Router	/:_id
 * Des		restaurants detail based on the id
 * Params	none
 * Access	Public
 * Method	GET
 */
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const restaurant = await RestaurantModel.findById(_id);

    if (!restaurants)
      return res.status(400).json({ error: "No restaurant found." });

    return res.json({ restaurant });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Router	/search
 * Des		restaurants details based on the search string
 * Params	none
 * Access	Public
 * Method	GET
 */
Router.get("/search/:searchString", async (req, res) => {
  try {
    const { searchString } = req.params;

    const restaurants = await RestaurantModel.find({
      name: {
        $regex: searchString,
        $options: "i",
      },
    });

    if (!restaurants)
      return res
        .status(404)
        .json({ error: `No restaurant matched with ${searchString}` });

    return res.json({ restaurants });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default Router;
