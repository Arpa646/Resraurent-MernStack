import {
    createBrowserRouter,
    
   
  } from "react-router-dom";
import App from "./App";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu/Menu";
  
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
        }
      ]
    },
  
  ]);