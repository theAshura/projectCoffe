import React from 'react'
import ManagerProducts from './ManagerProducts/ManagerProducts'
import SidebarAdmin from './Sidebar/SidebarAdmin'
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from '../../store/action/actions';
import { Routes, Route, useNavigate } from "react-router-dom";
import Listproducts from '../ListManager/ListProducts';
import ManagerUsers from './ManagerUser/ManagerUsers';

const Admin = () => {
 
  return (
    <div className='AdminContainer'>
      <SidebarAdmin/>
      {/* <ManagerProducts/> */}
     <ManagerUsers/>
    </div>
  )
}

export default Admin