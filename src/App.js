import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Container from "./Component/Container";
import DetailProducts from "./Component/DetailProducts";
import Footer from "./Component/Footer";
import MainTop from "./Component/MainTop";
import Navbar from "./Component/Navbar";
import Menu from "./Component/Menu";
import Login from "./Admin/Login/Login";
import Register from "./Admin/Login/Register";
import Home from "./Component/Home";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../my-app/src/store/action/actions";
import Admin from "./Admin/AdminManagerment/Admin";
function App() {
  const { products } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/menu" element={<Menu products={products} />} />
          <Route path="/menu/:id" element={<DetailProducts products={products} />} />
          <Route path="/myAdmin" element={<Admin/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
