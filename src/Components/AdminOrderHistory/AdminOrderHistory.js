import React, { useEffect, useState } from 'react';
import SinglePendingOrder from '../SinglePendingOrder/SinglePendingOrder';
import { useHistory } from 'react-router-dom';
import { getUserInfo } from '../../Utilities/SessionData';
import {AiFillTag} from "react-icons/ai";

const AdminOrderHistory = () => {

  
    let history=useHistory();
    if(getUserInfo().email!='outoftheboxdesh@gmail.com')
    {
        history.push('/home');
    }


    const [orderHistory,setOrderHistory]=useState([]);
   



    useEffect(()=>
    {

        fetch('http://localhost:5000/orderHistory')
        .then(res=>res.json())
        .then(data=>setOrderHistory(data));

      

       

    },[])
    return (
        
        <div>

           <span  style={{ 'fontFamily': 'cursive', 'fontSize': '3rem', marginLeft: '36.5%'}}><AiFillTag style={{color: 'orange'}}/><b className="logg">D</b>esh<b className="logg">M</b>art</span>
            {
               orderHistory.map(order=><SinglePendingOrder order={order} collection="orderHistory"></SinglePendingOrder>)
           }
        </div>
    );
};

export default AdminOrderHistory;