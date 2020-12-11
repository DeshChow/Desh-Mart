import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import {  getFullCart,ClearCart, DeleteItem, InsertItem } from '../../Utilities/databaseManager';
import OrderDetails from '../OrderDetails/OrderDetails';
const ReviewCart = () => {


    const [order,setOrder]=useState([]);

    let ara;

    const history=useHistory();


    useEffect(() => {

          ara=getFullCart();

         setOrder(ara);

      //   console.log(ara);

      
    }, []);


    const ClearThisCart=()=>
    {
        ClearCart();
        window.location.reload(false);
    }
    return (
        <div>
            <h1>Review Your Cart</h1>

          <div>

            {

                   order.map(order=><OrderDetails order={order} key={order.id}></OrderDetails>)
            }


          </div>



          <div>


                  <button onClick={ClearThisCart}>ClearCart</button>
                  <button onClick={()=>history.push('DeshMart/Checkout')}>Proceed Checkout</button>
          </div>



              



        </div>
    );
};

export default ReviewCart;