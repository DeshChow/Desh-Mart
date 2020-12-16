import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getFullCart, ClearCart, DeleteItem, InsertItem } from '../../Utilities/databaseManager';
import OrderDetails from '../OrderDetails/OrderDetails';
import OrderSummaryDetails from '../OrderSummaryDetails/OrderSummaryDetails';
import './ReviewCart.css'
const ReviewCart = () => {


  const [order, setOrder] = useState([]);

  let ara;

  const history = useHistory();


  useEffect(() => {

    ara = getFullCart();

    setOrder(ara);

    //   console.log(ara);


  }, []);


  const ClearThisCart = () => {
    ClearCart();
    window.location.reload(false);
  }
  return (
   



      <div className="twin-container">

        <div className="product-container">

          {

            order.map(order => <OrderDetails order={order} key={order.id}></OrderDetails>)
          }

       

        </div>




        <div className="cart-container">



          <OrderSummaryDetails cartDetails={order}></OrderSummaryDetails>

          <button onClick={ClearThisCart}>ClearCart</button>
          <br/>
          <br/>
          <button onClick={() => history.push('DeshMart/Checkout')}>Proceed Checkout</button>

          

        </div>

      </div>

    












  );
};

export default ReviewCart;