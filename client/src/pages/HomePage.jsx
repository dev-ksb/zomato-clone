import React from "react";
import { useParams } from "react-router-dom";
import Delivery from "../components/Delivery";
import Dining from "../components/Dining";
import NightLife from "../components/NightLife";
import Nutrition from "../components/Nutrition";

const HomePage = () => {
  const { type } = useParams();
  return (
    <>
      <div className="my-5">{type === "delivery" && <Delivery />}</div>
      <div className="my-5">{type === "dining" && <Dining />}</div>
      <div className="my-5">{type === "night" && <NightLife />}</div>
      <div className="my-5">{type === "nutri" && <Nutrition />}</div>
    </>
  );
};

export default HomePage;
