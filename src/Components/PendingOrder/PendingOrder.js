import React, { useEffect, useState } from 'react';
import SinglePendingOrder from '../SinglePendingOrder/SinglePendingOrder';
import SingleProductDetails from '../SingleProductDetails/SingleProductDetails';


const PendingOrder = () => {



      const [orders,setOrders]=useState([]);

        useEffect(()=>
        {

            fetch('http://localhost:5000/orders')
            .then(res=>res.json())
            .then(data=>setOrders(data));

          

           

        },[])





    return (
        <div>

           {
               orders.map(order=><SinglePendingOrder order={order} collection="orders"></SinglePendingOrder>)
           }

        </div>
    );
};

export default PendingOrder;