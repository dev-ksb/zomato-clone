import React from "react";
import NightLifeCarousel from "./NightLifeCarousel";

const NightLife = () => {
  return (
    <div>
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        NightLife Restaurants in Vijay Nagar
      </h1>
      <NightLifeCarousel />
    </div>
  );
};

export default NightLife;
