import React,{useState,useEffect} from 'react';
import AdminPendingReviewInner from '../AdminPendingReviewInner/AdminPendingReviewInner';

const AdminPendingReview = () => {


    const [reviews,setReviews]=useState([]);

    useEffect(()=>
    {

        fetch('http://localhost:5000/pedingReview')
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

export default AdminPendingReview;