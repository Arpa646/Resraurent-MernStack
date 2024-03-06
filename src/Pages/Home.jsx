import React from 'react';
import Banner from './Home/Banner/Banner';
import Category from './Home/Category/Category';
import PopularMenu from './Home/PopularMenu/PopularMenu';
import MenuItem from '../Shared/MenuItem/MenuItem';
import Featured from './Home/Featured/Featured';


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
     
            
        </div>
    );
};

export default Home;