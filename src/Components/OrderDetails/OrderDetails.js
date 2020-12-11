import React from 'react';
import {  getFullCart,ClearCart, DeleteItem, InsertItem } from '../../Utilities/databaseManager';
const OrderDetails = ({ order }) => {


    const { name, quantity, price,id } = order;


    const RemoveItem=()=>
    {
       // console.log('hamaisi')
          DeleteItem(id);

          window.location.reload(false);
    }

    return (
        <div style={{margin:'30px'}}>
            <h1>Name :{name}</h1>

            <h2>Quanitity : {quantity}</h2>

            <h4>Total Price : {price}</h4>

            <button onClick={RemoveItem}>Remove</button>
        </div>
    );
};

export default OrderDetails;