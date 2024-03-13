import React, { useState } from "react";
import "./Signup.css";
import { signupApi } from "../../Api";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [place, setPlace] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    signupApi({ name, email, place, age, password });
  };

  return (
    <div>
      <div className="main">
        <h1>SIGNUP</h1>
        <div className="signup">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Place"
            onChange={(e) => setPlace(e.target.value)}
          />
          <input
            type="text"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" onClick={submit}>
            Submit
          </button>
          <Link to={"/"}>
            <p>Already Have An Account?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
