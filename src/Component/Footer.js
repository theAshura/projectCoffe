import React from "react";
import "./footer.css";
import { BiPhone } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <ul className="footer-main-ul">
          <li>
            <h3>Giới thiệu</h3>
          </li>
          <li>
            <p>Về chúng tôi</p>
          </li>
          <li>
            <p>Sản phẩm</p>
          </li>
          <li>
            <p>Khuyến mãi</p>
          </li>
          <li>
            <p>Cửa hàng</p>
          </li>
          <li>
            <p>Tuyển dụng</p>
          </li>
        </ul>
        <ul className="footer-main-ul">
          <li>
            <h3>Điều khoản</h3>
          </li>
          <li>
            <p>Điều khoản sử dụng</p>
          </li>
          <li>
            <p>Quy tắc bảo mật</p>
          </li>
        </ul>
        <ul style={{marginTop:'16px'}} className="footer-main-ul">
          <li style={{display:'flex',alignItems:'center'}}>
            <BiPhone style={{marginRight:'12px'}} /><h3>Đặt hàng: 1800 6936</h3>
          </li>
          <li style={{display:'flex',alignItems:'center'}}>
            <HiLocationMarker style={{marginRight:'12px'}} /><p> Liên hệ</p>
          </li>
          <li>
            <p>
              Tầng 3-4 Hub Building 195/10E Điện Biên Phủ, 
              P.15 , Q.Bình Thạnh,TP.Hồ Chí Minh
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
