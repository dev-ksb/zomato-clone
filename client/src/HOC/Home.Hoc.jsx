import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import HomeLayout from "../layouts/Homepage.layout";

const HomeLayoutHoc = ({ component: Component, path, ...rest }) => {
  return (
    <Routes>
      <Route {...rest} path="/" element={<HomeLayout />}>
        <Route path={path} element={<Component />} />
      </Route>
    </Routes>
  );
};

export default HomeLayoutHoc;
