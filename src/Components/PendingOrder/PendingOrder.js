import React, { useEffect, useState } from 'react';
import SinglePendingOrder from '../SinglePendingOrder/SinglePendingOrder';
import SingleProductDetails from '../SingleProductDetails/SingleProductDetails';
import { useHistory } from 'react-router-dom';
import { getUserInfo } from '../../Utilities/SessionData';
import {AiFillTag} from "react-icons/ai";


const PendingOrder = () => {


   
        let history=useHistory();
          
        if(getUserInfo().email!='outoftheboxdesh@gmail.com')
        {
            history.push('/home');
        }

      const [orders,setOrders]=useState([]);

        useEffect(()=>
        {

            fetch('http://localhost:5000/orders')
            .then(res=>res.json())
            .then(data=>setOrders(data));

          

           

        },[])





    return (
        <div>
             <span  style={{ 'fontFamily': 'cursive', 'fontSize': '3rem', marginLeft: '36.5%'}}><AiFillTag style={{color: 'orange'}}/><b className="logg">D</b>esh<b className="logg">M</b>art</span>

           {
               orders.map(order=><SinglePendingOrder order={order} collection="orders"></SinglePendingOrder>)
           }

        </div>
    );
};

export default PendingOrder;