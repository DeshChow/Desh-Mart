import React, { useEffect, useState } from 'react';
import SinglePendingOrder from '../SinglePendingOrder/SinglePendingOrder';
import { useHistory } from 'react-router-dom';
import { getUserInfo } from '../../Utilities/SessionData';
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
            {
               orderHistory.map(order=><SinglePendingOrder order={order} collection="orderHistory"></SinglePendingOrder>)
           }
        </div>
    );
};

export default AdminOrderHistory;