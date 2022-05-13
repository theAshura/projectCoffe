import React, { useState, useEffect } from "react";
import "./menu.css";
import "./maintop.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/action/actions";
import Sidebar from "./Menu";
const Container = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  const { products } = useSelector((state) => state.data);
  const [menuItems, setMenuItems] = useState(products);

  const allCategories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(products);
      return;
    }
    const newItems = products.filter(
      (product) => product.category === category
    );
    setMenuItems(newItems);
  };
  return (
    <div>
      <Sidebar items={menuItems} categories={categories} filterItems={filterItems} />
    </div>
  );
};

export default Container;
