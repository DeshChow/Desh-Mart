import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getFullCart, ClearCart, DeleteItem, InsertItem } from '../../Utilities/databaseManager';
import FootItem from '../FootItem/FootItem';
import OrderDetails from '../OrderDetails/OrderDetails';
import OrderSummaryDetails from '../OrderSummaryDetails/OrderSummaryDetails';
import './ReviewCart.css';
import {ImCross} from "react-icons/im";
import {FiArrowRight} from "react-icons/fi";
import { Card } from 'react-bootstrap';
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
   

    <div>

      <div className="twin-container">

        <div className="product-container">

        {order.length? 

         <div>
          {

            order.map(order => <OrderDetails order={order} key={order.id}></OrderDetails>)
          }</div>:
          <Card className="emptylist" style={{marginTop: '120px',marginLeft: '50px', marginRight: '50px'}}>  
          <h1>Your  <span  style={{ 'fontFamily': 'cursive', 'fontSize': '2rem'}}><b className="logg">D</b>esh<b className="logg">M</b>art</span> Cart is empty.</h1>

          <br></br>

          <h6 style={{color: 'gray'}}>
          Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
          Continue shopping on the <Link to='/home'>DeshMart.com homepage</Link>.</h6>
          
          </Card>

        }

       

        </div>




        <div className="cart-container">



          <OrderSummaryDetails cartDetails={order}></OrderSummaryDetails>

          <button className="clearcartbtn" onClick={ClearThisCart}><b>Clear Cart</b><ImCross style={{marginLeft: '5px',marginTop: '-2px', color:'black'}} size="0.8rem"/></button>
          <br/>
          <br/>
          <button className="proceedcartbtn" onClick={() => history.push('DeshMart/Checkout')}><b>Proceed Checkout</b><FiArrowRight style={{marginLeft: '5px',marginTop: '-2px', color:'white'}} size="1.2rem" /></button>

          

        </div>

      </div>

     <div style={{marginTop:'100px'}}>
      <FootItem></FootItem>
      </div>
      </div>

    












  );
};

export default ReviewCart;