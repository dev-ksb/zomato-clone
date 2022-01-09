import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 lg:px-20">
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default HomeLayout;
