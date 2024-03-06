import React, { useEffect, useState } from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data?.filter((item) => item.category == "popular");
        setMenu(popularItem);
      });
  }, []);

  console.log(menu);

  return (
    <div className="grid md:grid-cols-2 gap">
      {menu.map((item) => (
        <MenuItem item={item} key={item._id}></MenuItem>
      ))}
    </div>
  );
};

export default PopularMenu;
