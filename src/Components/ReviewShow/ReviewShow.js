import React, { useEffect, useState } from 'react';
import ReviewShowInner from '../ReviewShowInner/ReviewShowInner';
import './ReviewShow.css';
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
        <div className=" row reviewsty">
        {
            
            reviews.map(rv=><div className="col-md-3"><ReviewShowInner rv={rv}></ReviewShowInner></div>)
        
        }
        </div>
    );
};

export default ReviewShow;