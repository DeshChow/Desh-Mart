import React, { useState } from 'react';
import SinglePendingOrderInner from '../SinglePendingOrderInner/SinglePendingOrderInner';

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
        <div style={{margin:'40px'}}>
            <div style={{margin:'20px'}}>
              <h1>Name : {name}</h1>

                <h2>Email :{email}</h2>

                <p>Address :{address}</p>

            </div>


            <div>

              

                {


                      

                    Cart.map(cart=><SinglePendingOrderInner cart={cart} key={cart.id}></SinglePendingOrderInner>)


                  


                }

            <h2>Total Price : {TotalPrice}</h2>


            <button onClick={DeleteOrder}>DELETE This ORDER</button>


                


            </div>

          
        </div>
    );
};

export default SinglePendingOrder;