import React from 'react';

import CarouselItem from '../CarouselItem/CarouselItem';
import Category from '../Category/Category';
import NavBar from '../NavBar/NavBar';

import './Home.css';

const Home = () => {
    return (
        <div className="cat">
            

            <CarouselItem></CarouselItem>
            <Category></Category>
           
        </div>
    );
};

export default Home;