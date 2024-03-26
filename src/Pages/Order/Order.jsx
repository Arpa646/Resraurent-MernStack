import React, { useEffect, useState } from "react";
import orderCoverImg from '../../assets/shop/order.jpg'
import Cover from "../../Shared/Cover/Cover";
import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from "../../Provider/OrderTab/OrderTab";
// import UseMenu from "../../Hooks/UseMenu";
import { useLocation, useParams } from "react-router-dom";
import UseMenu from "../../Hooks/UseMenu";
import UseCart from "../../Hooks/UseCart";
//we are using here react tab for showing data
//which tab we will click this data will show as card
const Order = () => {
   const [menu] = UseMenu();

   const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  // const navigate=useNavigate();
  // const loaction=useLocation();
  // const from=location?.state?.from?.pathname || "/"
const[cart]=UseCart()
console.log(cart)


    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      
      </Helmet>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
     <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
                </Tabs> 
    </div>
  );
};

export default Order;
