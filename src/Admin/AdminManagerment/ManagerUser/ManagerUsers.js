import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import {
  addUser,
  deleteUser,
  getUser,
  setUser,
  updateUser,
} from "../../../store/action/actions";

const ManagerUsers = () => {
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);
  const { user, users } = state;
  const [userPerPage] = useState(4);
  const [pickedUser, setPickedUser] = useState([]);
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentPosts = users.slice(indexOfFirstUser, indexOfLastUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUser());
    dispatch(getUser());
  };

  // console.log(users)
  const handleAdd = () => {
    console.log(user);
    dispatch(addUser(user));
  };
  const handleEdit = () => {
    console.log(pickedUser);
    const editUser = users.filter((user) => user.id === pickedUser[0]);
    console.log(editUser[0]);
    dispatch(setUser(editUser[0]));
  };
  const handleDelete = () => {
    const delList = pickedUser;
    delList.forEach((contact) => {
      dispatch(deleteUser(contact));
      console.log(contact);
    });
    dispatch(getUser());
    dispatch(getUser());
    setPickedUser("");
    dispatch(
      setUser({
        idUser: null,
        userName: "",
        passWord: "",
        name: "",
        order: [],
        role: "",
      })
    );
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    dispatch(updateUser(user));
    dispatch(getUser());
    dispatch(
      setUser({
        idUser: null,
        userName: "",
        passWord: "",
        name: "",
        order: [],
        role: "",
      })
    );
    dispatch(getUser());
  };
  const handleCheckbox = (id) => {
    const isChecked = pickedUser.includes(id);
    const checkboxListUpdate = isChecked
      ? pickedUser.filter((item) => item !== id)
      : [...pickedUser, id];
    setPickedUser(checkboxListUpdate);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <p>Tên đăng nhập</p>
          <input
            id="userName"
            className="input-basic"
            name="userName"
            type="text"
            value={user.userName}
            onChange={(e) => {
              dispatch(
                setUser({
                  ...user,
                  userName: e.target.value,
                })
              );
            }}
          ></input>
        </div>
        <div className="form-group">
          <p>Mật khẩu</p>
          <input
            id="passUser"
            className="input-basic"
            name="passUser"
            type="text"
            value={user.passWord}
            onChange={(e) => {
              dispatch(
                setUser({
                  ...user,
                  passWord: e.target.value,
                })
              );
            }}
          ></input>
        </div>
        <div className="form-group">
          <p>Tên người dùng</p>
          <input
            type="text"
            id="nameUser"
            className="input-basic"
            name="nameUser"
            value={user.name}
            onChange={(e) => {
              dispatch(
                setUser({
                  ...user,
                  name: e.target.value,
                })
              );
            }}
          ></input>
        </div>
        <div className="form-group">
          <p>Vai trò</p>
          <select
            value={user.role}
            onChange={(e) => {
              dispatch(
                setUser({
                  ...user,
                  role: e.target.value,
                })
              );
            }}
            name="roleUser"
            id="roleUser"
          >
            <option>user</option>
            <option>admin</option>
          </select>
        </div>
        <div>
          <button onClick={handleSubmitEdit}>submit</button>
        </div>
        <div className="list">
          <h1>List</h1>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Tên đăng nhập</th>
                <th>Mật khẩu</th>
                <th>Tên người dùng</th>
                <th>Vai trò</th>
              </tr>
            </thead>
            <tbody>
              {users.map((contact, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      name="checkbox"
                      onChange={() => handleCheckbox(contact.id)}
                      checked={pickedUser.includes(contact.id)}
                    />
                    
                  </td>
                  <td>{contact.userName}</td>
                  <td>{contact.passWord}</td>
                  <td>{contact.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default ManagerUsers;
