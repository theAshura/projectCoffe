import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginImage from "../../img/admin/Group.svg";
import { RiEyeOffLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { useNavigate, usehistory, Link } from "react-router-dom";
import "./Login.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { loginInitiate } from "../../store/action/actions";
const Login = ({ Login }) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {currentUser} = useSelector((state)=>state.data)
  useEffect(()=>{
    if(currentUser){
      navigate('/')
    }
  },[currentUser,navigate])
 
  const handleGoogleSignIn = () => {};
  const handleFacebookSignIn = () => {};
  const handleChange = (e) => {
    let {name,value} = e.target;
    setState({...state,[name]:value})
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email || !password){
      return
    }
    dispatch(loginInitiate(email,password))
    setState({email:'',displayName:'',password:'',passwordConfirm:''})
  };
  return (
    <div>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign In
          </h1>
          <div className="social-login">
            <button
              className="btn google-btn social-btn"
              type="button"
              onClick={handleGoogleSignIn}
            >
              <span>
                <i className="fab fa-google-plus-g">
                  <AiOutlineGooglePlus />
                  Sign in with Google+{" "}
                </i>
              </span>
            </button>
            <button
              className="btn facebook-btn social-btn"
              type="button"
              onClick={handleFacebookSignIn}
            >
              <span>
                <i className="BsFacebook">
                  <BsFacebook />
                  Sign in with Facebook{" "}
                </i>
              </span>
            </button>
          </div>
          <p style={{ textAlign: "center" }}>OR</p>
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
          <button className="btn btn-secondary btn-block" type="submit">
            Sign in
          </button>
          <hr />
          <p>Dont have an account</p>
          <Link to="/register">register here</Link>
          {/* {show ? (
                <RiEyeOffLine
                  onClick={() => setShow(!show)}
                  className="hideLogo"
                />
              ) : (
                <RiEyeLine
                  onClick={() => setShow(!show)}
                  className="hideLogo"
                />
              )} */}
        </form>
      </div>
    </div>
  );
};

export default Login;
