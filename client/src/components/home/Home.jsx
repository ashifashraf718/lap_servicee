import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeLoginData } from "../../redux/loginSlice";
import { getPersonInfo } from "../../Api";
import "./Home.css"

const Home = () => {
  const [person, setPerson] = useState([])
  
  const dispatch = useDispatch()


  const data = useSelector((state) => state.login.loginData[0])
  console.log("data", data);


  const logout = () => {
    dispatch(removeLoginData())
  }


  const profile = async () => {
    let user = await getPersonInfo(data._id)
    setPerson(user.data)
  }
  console.log("state", person);
  return (
    <div className="home">
      <div className="nav">
        <div className="left-nav">
          <h1>HOME</h1>
        </div>
        <div className="right-nav">
          <button onClick={logout}>logout</button>
          <button onClick={profile}>profile</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
