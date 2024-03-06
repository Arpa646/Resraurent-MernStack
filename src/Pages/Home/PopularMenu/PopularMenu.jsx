import React, { useEffect, useState } from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import UseMenu from "../../../Hooks/UseMenu";
import Category from "./../Category/Category";
//custom hooks just a normal function we use
// we use custom hooks for reuse code 
//and return nessecery thing that we can use many where
const PopularMenu = () => {
  const [menu, loader] = UseMenu();
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItem = data?.filter((item) => item.category == "popular");
  //       setMenu(popularItem);
  //     });
  // }, []);

  const popularMenu = menu?.filter((each) => each.category == "popular");
  
  console.log(popularMenu);

  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
