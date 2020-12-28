import React, { useEffect, useState } from 'react';
import FootItem from '../FootItem/FootItem';
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
                data.reverse();

                setReviews(data);

                console.log(data);
            });

      

       

    },[])

    const isAvailable=()=>
    {
        if(reviews.length>0)return true;

        else return false;
    }

    


    return (

      
        <div className=" row reviewsty">
        {
            
            reviews.map(rv=><div className="col-md-3"><ReviewShowInner rv={rv}></ReviewShowInner></div>)
        
        }

        </div>

  
    );
};

export default ReviewShow;