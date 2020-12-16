import React from 'react';
import { Link } from 'react-router-dom';
import {  getFullCart,ClearCart, DeleteItem, InsertItem } from '../../Utilities/databaseManager';
import './OrderDetails.css'
const OrderDetails = ({ order }) => {


    const { name, quantity, price,id,category } = order;


    const RemoveItem=()=>
    {
       // console.log('hamaisi')
          DeleteItem(id);

          window.location.reload(false);
    }

    return (
        <div className="cell">


          <h4 className='product-name'><Link to={'/product/'+id+'/'+category}>{name}</Link></h4><br/>

            <h2>Quanitity : {quantity}</h2>

            <h4>Total Price : {price}</h4>

            <button onClick={RemoveItem}>Remove</button>
        </div>
    );
};

export default OrderDetails;