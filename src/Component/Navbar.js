import React from "react";
import logo from "../img/menu/9.-the-coffee-house.png";
import "./navbar.css";
import { TiLocationOutline } from "react-icons/ti";
import { GrPhone } from "react-icons/gr";
import { FaMotorcycle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="navbar-top">
          <ul className="navbar-top__ul">
            <li className="navbar-top__ul__li">
              <TiLocationOutline className="navbar-top-icon" />
              <p>154 cửa hàng khắp cả nước</p>
            </li>
            <li className="navbar-top__ul__li">
              <GrPhone className="navbar-top-icon" />
              <p>Đặt hàng: 1800.6936</p>
            </li>
            <li className="navbar-top__ul__li">
              <FaMotorcycle className="navbar-top-icon" />
              <p>Freeship từ 50.000vnd</p>
            </li>
          </ul>
        </div>
        <div className="navbar">
          <div className="navbar-main">
           <Link to='/'><img className="img-navbar" alt="logo" src={logo} /></Link> 

            <ul className="navbar-ul">
              <li>Cà phê</li>
              <li>Trà</li>
              <li>
                <Link style={{textDecoration:'none'}} to="/menu">Menu</Link>
              </li>
              <li>Bánh & Snack</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
