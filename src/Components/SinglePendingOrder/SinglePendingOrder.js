import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import SinglePendingOrderInner from '../SinglePendingOrderInner/SinglePendingOrderInner';
import './SinglePendingOrder.css';
import orderback from '../../images/orderback.jpg';

const SinglePendingOrder = ({ order ,collection}) => {

    const { _id, Cart, buyerDetails,TotalPrice } = order;


    const {name,email,address}=buyerDetails;


    const DeleteOrder=()=>
    {
        const url='http://localhost:5000/deleteOrder/'+collection+'/'+_id;

       // console.log(url)
 
         fetch(url, {
             method: 'DELETE'
            
         })
             .then(response => response.json())
             .then(data => {
                 //console.log(data)
 
                 if(data)
                 {
                    window.location.reload(false);
                //     alert('succuessfully deleted from '+collection);
                    
                 }
             })
             .catch(error => {
                 console.error(error)
             })
    }

   


    return (
        <div className="full-form" >

            <Card  style={{ width: '40rem',height:'15rem' }}  className="left-form">

            
              <h1>Name : {name}</h1>
                <h2>Email :{email}</h2>

                <p>Address :{address}</p>
            
            </Card>
            <div style={{width: '10px'}}>

            </div>

            <Card className="right-form">

             {
                    Cart.map(cart=><SinglePendingOrderInner cart={cart} key={cart.id}></SinglePendingOrderInner>)
                }
            <h2>Total Price : {TotalPrice}</h2>

            
            <div className="ordercontainer">
            <button onClick={DeleteOrder} className="ordertest">DELETE</button >
            </div>
            </Card>
          
        </div>
    );
};

export default SinglePendingOrder;