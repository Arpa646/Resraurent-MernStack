import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import img1 from '../../assets/menu/menu-bg.jpg'
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>coffeshop|| Menu</title>
      </Helmet>
       <Cover img={img1} title="Our menu"  ></Cover>
    </div>
  );
};

export default Menu;
