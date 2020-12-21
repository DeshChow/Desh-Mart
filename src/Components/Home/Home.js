import React from 'react';

import CarouselItem from '../CarouselItem/CarouselItem';
import Category from '../Category/Category';
import FootItem from '../FootItem/FootItem';

import NavBar from '../NavBar/NavBar';
import UserReview from '../UserReview/UserReview';

import './Home.css';

const Home = () => {
    return (
        <div className="cat">
            

            <CarouselItem></CarouselItem>

            <div className="sec">
            <Category></Category>
            </div>         
            <UserReview></UserReview>

            <FootItem></FootItem>

         
           
        </div>
    );
};

export default Home;