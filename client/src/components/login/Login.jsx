import React, { useState } from "react";
import "./Login.css";
import { loginApi } from "../../Api";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const submit = () => {
    console.log(email, password);
    loginApi({ email, password }, dispatch);
  };
  return (
    <div className="main">
      <h1>LOGIN</h1>
      <div className="login">
        <div>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="link">
          <button className="btn" onClick={submit}>
            Login
          </button>
          <Link to={"signup"}>
            <p>Create An Account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
