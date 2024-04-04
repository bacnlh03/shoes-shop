import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/Cart";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/detail/:id" element={<ProductDetail />} />

      <Route element={<PrivateRoute />}>
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;