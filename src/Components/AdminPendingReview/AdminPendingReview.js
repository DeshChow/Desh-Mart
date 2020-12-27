import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { getUserInfo } from '../../Utilities/SessionData';
import AdminPendingReviewInner from '../AdminPendingReviewInner/AdminPendingReviewInner';
import {AiFillTag} from "react-icons/ai";
import swal from 'sweetalert';

const AdminPendingReview = () => {

    let history=useHistory();

    if(getUserInfo().email!='outoftheboxdesh@gmail.com')
    {
        history.push('/home');
        swal("Only Admin Access!");
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
        
        <span  style={{ 'fontFamily': 'cursive', 'fontSize': '3rem', marginLeft: '36.5%'}}><AiFillTag style={{color: 'orange'}}/><b className="logg">D</b>esh<b className="logg">M</b>art</span>


          <div className="row" style={{paddingLeft: '20px', paddingRight: '20px'}}>
           {
             reviews.map(rv=><div className="col-md-3"> <AdminPendingReviewInner rv={rv}></AdminPendingReviewInner></div>)
           }
         </div>
        </div>
    );
};

export default AdminPendingReview;