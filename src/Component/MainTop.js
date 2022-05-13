import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/action/actions";
import "./maintop.css";
import main from '../img/menu/main.svg'
import desktop from "../img/menu/desktop.png";
import { Link } from "react-router-dom";

const MainTop = () => {
  let dispatch = useDispatch();
  const { products } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const teas = products.filter((product)=> product.category === 'Hi-tea Healthy')
  return (
      <>
<div className="ContainerMain">
      <div className="img-header">
          <img alt="desktop" src={desktop} />
        </div>
      <div style={{display:'flex',flexWrap:'wrap'}} className="MainTop">
        
      </div>
    </div>
    <div className="main-middle-container">
    <div className="main-middle">
          <ul className="main-middle-ul">
              <li><img src={main}/></li>
              <li><p>Được chiết xuất từ 100% hoa Hibiscus tự nhiên, không chứa caffeine cùng toppings trái cây đa dạng, Hi-Tea Healthy là lựa chọn cho những ai muốn chăm sức khoẻ và yêu chiều bản thân. Chọn Hi - Tea Healthy là chọn “Say Hi” với một cách sống mới “Heathy và Healing” cho chính mình.</p></li>
              <li><h2>Thử đi chờ chi!</h2></li>
          </ul>
          
         
      </div>
      <div style={{display:'flex',flexWrap:'wrap'}} className="MainTop" >
      
      {teas.map((tea) => {
        
          return (
            <Link style={{textDecoration:'none'}} to={`/menu/${tea.id}`}>
            <div style={{display:'flex'}} className=""  key={tea.id}>
              <ul  style={{listStyleType:'none'}} >
                  <li><img className="maintop-img2" src={tea.img}></img></li>
                  <li style={{color: '#191919',fontWeight:'bold'}}>{tea.title}</li>
                  <li>{tea.price} đ</li>
              </ul>
            </div>
            </Link>
          );
          
        })}
     
         
          </div>
    </div>
    
      </>
    
  );
};

export default MainTop;
