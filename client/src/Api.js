import axios from "axios";
import { publicRequest } from "./AxiosCreate";
import { addLoginData } from "./redux/loginSlice";

export const signupApi = async (data) => {
  console.log("data...:", data);
  try {
    const signupData = await publicRequest.post("/api/signup", data);
    console.log("final data", signupData.data);
  } catch (error) {
    console.log(error.message);
  }
};
export const loginApi = async (data, dispatch) => {
  console.log("data", data);
  try {
    const loginData = await axios.post(
      "http://localhost:5000/loginApi/login",
      data
    );
    console.log("login Data :", loginData.data);
    dispatch(addLoginData(loginData.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const getPersonInfo=async(id)=>{
  console.log("id",id);
  try {
    const personalInfo=await axios.get(`http://localhost:5000/api/getById/${id}`)
    console.log("user :",personalInfo.data);
    return personalInfo
  } catch (error) {
    console.log(error.message);
  }
}