import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logIn, signUp } from "../../actions/AuthActions";

const Auth = () => { 
  
    const initialState = {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading)
  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);


  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass ?
      dispatch(signUp(data, navigate))
      : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };



  return (
    <div className="Auth">
      {/* LeftSide */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Lucky Media</h1>
          <h6>Explore your social network!</h6>
        </div>
      </div>
      {/* RightSide */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log in"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                value={data.confirmpass}
                onChange={handleChange}
              />
            )}
          </div>

          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer", textDecoration: "underline" }}
              onClick={() => {setIsSignUp((prev) => !prev); resetForm()}}
            >
              {isSignUp
                ? "Already have an account? Log in!"
                : "Don't have an account yet? Sign up"}
            </span>
          </div>
          <button className="button infoButton" type="Submit" disabled={loading}>
            {loading? "Loading...": isSignUp ? "Signup" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
