import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RestaurantLayout from "../layouts/Restaurant.layout";

const RestaurantLayoutHoc = ({ component: Component, path, ...rest }) => {
  return (
    <Routes>
      <Route {...rest} path="/restaurant" element={<RestaurantLayout />}>
        <Route path={path} element={<Component />} />
      </Route>
    </Routes>
  );
};

export default RestaurantLayoutHoc;
