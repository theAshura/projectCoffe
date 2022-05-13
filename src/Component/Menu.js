import React, { useEffect, useState } from "react";
import "./menu.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/action/actions";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import logo from '../img/menu/desktop.png'

const Menu = ({products}) => {
  

  const [menuItems, setMenuItems] = useState(products);
  const allCategories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];
  console.log(products);

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
    <>
    <Navbar/>
      <div className="Sidebar-container">
        <div className="Sidebar">
          {allCategories.map((category, index) => {
            return (
              <div key={index}>
                <ul  className="Sidebar-ul">
                  <li className="Sidebar-ul-li">
                    <a onClick={() => filterItems(category)}>{category}</a>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="Menu">
        <img style={{width:'920px',height:'269px',marginLeft:'39px'}} src={logo}></img>
          <div
            style={{ display: "flex", flexWrap: "wrap" }}
            className="MainTop"
          >
            {(isEmpty(menuItems) ? products : menuItems).map((item) => {
              return (
                <>
                <Link style={{textDecoration:'none'}} to={`/menu/${item.id}`}>
                  <div  style={{ display: "flex" }} className="" key={item.id}>
                    <ul  style={{ listStyleType: "none" }}>
                      <li>
                        <img className="menu-img" src={item.img}></img>
                      </li>
                      <li style={{ color: "#191919", fontWeight: "bold" }}>
                        {item.title}
                      </li>
                      <li style={{color:'#EA8025'}}>{item.price} đ</li>
                    </ul>
                  </div>
                </Link>
                </>
                
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Menu;
