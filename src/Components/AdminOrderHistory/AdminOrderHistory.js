import React, { useEffect, useState } from 'react';
import SinglePendingOrder from '../SinglePendingOrder/SinglePendingOrder';

const AdminOrderHistory = () => {

    const [orderHistory,setOrderHistory]=useState([]);

    useEffect(()=>
    {

        fetch('http://localhost:5000/orderHistory')
        .then(res=>res.json())
        .then(data=>setOrderHistory(data));

      

       

    },[])
    return (
        <div>
            <h1>history</h1>
            {
               orderHistory.map(order=><SinglePendingOrder order={order} collection="orderHistory"></SinglePendingOrder>)
           }
        </div>
    );
};

export default AdminOrderHistory;