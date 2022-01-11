import React from "react";
import { Outlet } from "react-router-dom";
import FoodTab from "../components/FoodTab";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <FoodTab />
      <main className="container mx-auto px-4 lg:px-20">
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default HomeLayout;
