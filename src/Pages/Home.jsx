import React from 'react';
import Banner from './Home/Banner/Banner';
import Category from './Home/Category/Category';
import PopularMenu from './Home/PopularMenu/PopularMenu';
import MenuItem from '../Shared/MenuItem/MenuItem';


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
     
            
        </div>
    );
};

export default Home;