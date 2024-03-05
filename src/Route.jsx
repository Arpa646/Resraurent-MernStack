import {
    createBrowserRouter,
    
   
  } from "react-router-dom";
import App from "./App";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
  
  export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>
      ,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  
  ]);