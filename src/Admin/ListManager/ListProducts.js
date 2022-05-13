import React,{useState,useEffect} from 'react'
import { setProduct, deleteProduct, getProduct,  } from "../../store/action/actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Pagination from './Pagination';
const Listproducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(4);
  const [pickedUser, setPickedUser] = useState({});
  const dispatch = useDispatch()
  const state = useSelector((state) => state.data);
  const { product, products } = state;
  const navigate = useNavigate();
  console.log(currentPage)
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentPosts = products.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <>
    <div>
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
                      name="contact"
                      onChange={() => setPickedUser(contact)}
                    />
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
    </div>
    </>
    
  )
}

export default Listproducts