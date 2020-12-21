import React, { useEffect, useState } from 'react';
import ReviewShowInner from '../ReviewShowInner/ReviewShowInner';

const ReviewShow = () => {


    const [reviews,setReviews]=useState([]);

    useEffect(()=>
    {

        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>
            {
                setReviews(data);

                console.log(data);
            });

      

       

    },[])


    return (
        <div>
            {


    reviews.map(rv=> <ReviewShowInner rv={rv}></ReviewShowInner>)
  
            }
        </div>
    );
};

export default ReviewShow;