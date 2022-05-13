import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginImage from "../../img/admin/Group.svg";
import { RiEyeOffLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import {  useNavigate, Link } from "react-router-dom";
import "./Register.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { registerInitiate } from "../../store/action/actions";
import { confirmPasswordReset } from "firebase/auth";
const Register = () => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const dispatch = useDispatch()
  const { email, password, displayName, passwordConfirm } = state;
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {currentUser} = useSelector((state)=>state.data)
  useEffect(()=>{
    if(currentUser){
      navigate('/')
    }
  },[currentUser,navigate])
 
  const handleSubmit = (e) => {
    e.preventDefault()
    if(password !== passwordConfirm){
      return
    }
    dispatch(registerInitiate(email,password,displayName))
    setState({email:'',displayName:'',password:'',passwordConfirm:''})
  };
  const handleChange = (e) => {
    let {name,value} = e.target
    setState({...state,[name]:value})
  };
  return (
    <div>
      <div id="register-form">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign Up
          </h1>

          <p style={{ textAlign: "center" }}>OR</p>
          <input
            type="text"
            id="displayName"
            className="form-control"
            value={displayName}
            placeholder="Name"
            name="displayName"
            onChange={handleChange}
          />
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            value={email}
            placeholder="Email address"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            id="inputPass"
            className="form-control"
            value={password}
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />

          <input
            type="password"
            id="inputRePassword"
            className="form-control"
            value={passwordConfirm}
            placeholder="Confirm Pasword"
            name="passwordConfirm"
            onChange={handleChange}
          />
          <button className="btn btn-primary btn-block" type="submit">
            Sign up
          </button>
          <Link to='/Login'>
            Back
          </Link>
         
        </form>
      </div>
    </div>
  );
};

export default Register;
