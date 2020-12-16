import React from 'react';

import CarouselItem from '../CarouselItem/CarouselItem';
import Category from '../Category/Category';
import NavBar from '../NavBar/NavBar';
import UserReview from '../UserReview/UserReview';

import './Home.css';

const Home = () => {
    return (
        <div className="cat">
            

            <CarouselItem></CarouselItem>
            <Category></Category>
            <UserReview></UserReview>
           
        </div>
    );
};

export default Home;