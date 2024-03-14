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
          element:<Menu></Menu>
        },
      {  path:'order/:category',
        element:<Order></Order>
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
    }

    
  
  ]);