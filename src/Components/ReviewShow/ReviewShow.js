import React, { useEffect, useState } from 'react';
import AdminPendingReviewInner from '../AdminPendingReviewInner/AdminPendingReviewInner';

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


    reviews.map(rv=> <AdminPendingReviewInner rv={rv}></AdminPendingReviewInner>)
  
            }
        </div>
    );
};

export default ReviewShow;