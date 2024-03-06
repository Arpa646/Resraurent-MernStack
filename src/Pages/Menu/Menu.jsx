import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import img1 from "../../assets/menu/menu-bg.jpg";
import UseMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import menuImg from '../../assets/menu/menu-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import MenuCategory from "../Menucategory/MenuCategory";
const Menu = () => {
  const [menu, loader] = UseMenu([]);
 
  const dessert = menu?.filter((each) => each.category == "popular");
  const pizza = menu?.filter((each) => each.category == "pizza");
  const salad = menu?.filter((each) => each.category == "salad");
  const soup = menu?.filter((each) => each.category == "soup");
  const offered = menu?.filter((each) => each.category == "offered");
  
  return (
    <div>
      <Helmet>
        <title>coffeshop|| Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
