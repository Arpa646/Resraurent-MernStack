import {
    createBrowserRouter,
    
   
  } from "react-router-dom";
import App from "./App";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu/Menu";
import Order from "./Pages/Order/Order";
import LogIn from "./Pages/Authentication/LogIn/LogIn";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import ProvateRoute from "./ProvateRoute";
import DashBoard from "./Layout/DashBoard";
// import MyCart from "./Pages/DashBoard/MyCart/MyCart";
import User from "./Pages/DashBoard/User/User";
import MyCart from "./Pages/DashBoard/MyCart/MyCart";
  
  export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>
      ,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<><Menu></Menu></>
        },
      {  path:'order/:category',
        element:<ProvateRoute><Order></Order></ProvateRoute>
      },
      
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
    ]
    },
    {
      path:'/dashboard',
      element:<DashBoard></DashBoard>,
      children:[

        {
          path:'/dashboard/mycart',
          element:<MyCart></MyCart>
        
        },
        {
          path:'/dashboard/alluser',
          element:<User></User>
        }
      ]
    }

    
  
  ]);