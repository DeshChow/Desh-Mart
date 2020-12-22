import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { getUserInfo } from '../../Utilities/SessionData';
import AdminPendingReviewInner from '../AdminPendingReviewInner/AdminPendingReviewInner';

const AdminPendingReview = () => {

    let history=useHistory();

    if(getUserInfo().email!='outoftheboxdesh@gmail.com')
    {
        history.push('/home');
    }
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