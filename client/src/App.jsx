import { useSelector } from "react-redux";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {


  const loginInfo=useSelector((state)=>state.login.loginData[0])
  console.log("useSelector data :",loginInfo);

  if(loginInfo){
    var token=loginInfo.accessToken
  }
  console.log("Token :",token);
  const router = createBrowserRouter([
    {
      path: "/",
      element:token ? <Home/> : <Login />
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
