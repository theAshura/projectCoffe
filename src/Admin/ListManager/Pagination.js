import React, { useContext, useReducer, useState } from "react";
import { useSelector } from "react-redux";
const Pagination = ({ userPerPage, setCurrentPage }) => {
    const state = useSelector((state) => state.data);
    const { product, products } = state;
    const pageNumbers = [];
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const numOfTodo = Math.ceil(products.length / userPerPage);
  for (let i = 1; i <= (numOfTodo < 1 ? numOfTodo + 1 : numOfTodo); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul  style={{listStyleType:'none',display:'flex'}} className="pagination">
        {pageNumbers.map((number) => (
          <li style={{marginLeft:'5px'}} key={number} className="page-item">
            <button style={{width:'30px',background:'#015DB2',color:'#FCFDFE',borderRadius:'5px'}}  onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination