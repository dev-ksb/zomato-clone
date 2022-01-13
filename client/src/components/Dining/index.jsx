import React from "react";
import DiningCarousel from "./DiningCarousel";

const Dining = () => {
  return (
    <div>
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Dine-Out Restaurants in Vijay Nagar
      </h1>
      <DiningCarousel />
    </div>
  );
};

export default Dining;
