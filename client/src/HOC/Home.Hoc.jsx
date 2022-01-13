import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import HomeLayout from "../layouts/Homepage.layout";

const HomeLayoutHoc = ({ component: Component, path, ...rest }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/delivery" />} />
      <Route {...rest} path="/" element={<HomeLayout />}>
        <Route path={path} element={<Component />} />
      </Route>
    </Routes>
  );
};

export default HomeLayoutHoc;
