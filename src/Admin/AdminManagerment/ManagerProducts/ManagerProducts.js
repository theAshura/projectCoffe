import React, { useState } from "react";
import "./managerproducts.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "../../ListManager/Pagination";
import {
  setProduct,
  addProduct,
  updateProduct,
  getProduct,
  deleteProduct,
} from "../../../store/action/actions";
const ManagerProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const state = useSelector((state) => state.data);
  const [userPerPage] = useState(4);
  const { product, products } = state;
  const [pickedUser, setPickedUser] = useState([]);
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentPosts = products.slice(indexOfFirstUser, indexOfLastUser);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProduct());
    dispatch(getProduct());
  };
  const handleAdd = () => {
    dispatch(addProduct(product));
    dispatch(
      setProduct({
        id: null,
        title: "",
        category: "",
        price: "",
        img: "",
        desc: "",
      })
    );
  };
  const handleEdit = () => {
    console.log(products)
    console.log(pickedUser)
    const editProduct = products.filter((product)=>product.id === pickedUser[0])
    console.log(editProduct[0])
    dispatch(setProduct(editProduct[0]));
  };
  const handleDelete = () => {
    const delList = pickedUser
    delList.forEach((contact)=>{
        dispatch(deleteProduct(contact))
        console.log(contact)
    })
    // dispatch(deleteProduct(pickedUser));
    dispatch(getProduct());
    dispatch(getProduct());
    setPickedUser('')
    dispatch(
      setProduct({
        id: null,
        title: "",
        category: "",
        price: "",
        img: "",
        desc: "",
      })
    );
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(product));
    dispatch(getProduct());
    dispatch(
      setProduct({
        id: null,
        title: "",
        category: "",
        price: "",
        img: "",
        desc: "",
      })
    );
    dispatch(getProduct());

  };
  const handleCheckbox = (id) =>{
    const isChecked = pickedUser.includes(id); 
    const checkboxListUpdate = isChecked ? pickedUser.filter(item => item !== id) : [...pickedUser,id]
    setPickedUser(checkboxListUpdate)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <p>Tên sản phẩm</p>
          <input
            id="titleProduct"
            className="input-basic"
            name="titleProduct"
            type="text"
            value={product.title}
            onChange={(e) => {
              dispatch(
                setProduct({
                  ...product,
                  title: e.target.value,
                })
              );
            }}
          ></input>
        </div>
        <div className="form-group">
          <p>Giá sản phẩm</p>
          <input
            id="priceProducts"
            className="input-basic"
            name="priceProducts"
            type="text"
            value={product.price}
            onChange={(e) => {
              dispatch(
                setProduct({
                  ...product,
                  price: e.target.value,
                })
              );
            }}
          ></input>
        </div>
        <div className="form-group">
          <p>Mô tả sản phẩm</p>
          <input
            type="text"
            id="descProducts"
            className="input-basic"
            name="descProduct"
            value={product.desc}
            onChange={(e) => {
              dispatch(
                setProduct({
                  ...product,
                  desc: e.target.value,
                })
              );
            }}
          ></input>
        </div>
        <div className="form-group">
          <p>Ảnh</p>
          <input
            type="text"
            id="descProducts"
            className="input-basic"
            name="descProduct"
            value={product.img}
            onChange={(e) => {
              dispatch(
                setProduct({
                  ...product,
                  img: e.target.value,
                })
              );
            }}
          ></input>
        </div>
        <div className="form-group">
          <p>Loại sản phẩm</p>
          <select
            value={product.category}
            onChange={(e) => {
              dispatch(
                setProduct({
                  ...product,
                  category: e.target.value,
                })
              );
            }}
            name="categoryProducts"
            id="categoryProducts"
          >
            <option>coffe</option>
            <option>tea</option>
            <option>bread</option>
            <option>Hi-tea Healthy</option>
          </select>
        </div>
            <div><button onClick={handleSubmitEdit}>submit</button></div>
        <div className="list">
          <h1>List</h1>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Loại sản phẩm</th>
                <th>Mô tả</th>
                <th>Ảnh</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((contact, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      name="checkbox"
                      onChange={() => handleCheckbox(contact.id)} 
                      checked={pickedUser.includes(contact.id)}/>
                  </td>
                  <td>{contact.title}</td>
                  <td>{contact.price}</td>
                  <td>{contact.category}</td>
                  <td>{contact.desc}</td>
                  <td>{contact.img}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            userPerPage={userPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <button type="submit" onClick={() => handleAdd()}>
          Add
        </button>
        <button className="delete" onClick={() => handleDelete()}>
          Delete
        </button>
        <button className="edit" onClick={() => handleEdit()}>
          Edit
        </button>
      </form>
    </>
  );
};

export default ManagerProducts;