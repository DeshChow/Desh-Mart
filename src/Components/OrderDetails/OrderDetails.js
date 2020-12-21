import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  getFullCart,ClearCart, DeleteItem, InsertItem } from '../../Utilities/databaseManager';
import './OrderDetails.css'
import {RiMoneyPoundBoxFill} from "react-icons/ri";
import {RiShoppingBagFill} from "react-icons/ri";

const OrderDetails = ({ order }) => {


    const { name, quantity, price,id,category } = order;


    const RemoveItem=()=>
    {
       // console.log('hamaisi')
          DeleteItem(id);

          window.location.reload(false);
    }

    return (

        <Card className="revcard">
        <div className="cell">


          <h4 ><b><Link style={{color: '#423E3D', fontFamily: 'Amazon'}} to={'/product/'+id+'/'+category}><a  style={{color: '#423E3D'}} className="revhov">{name}</a></Link></b></h4><br/>


            <div style={{fontSize: '22px',textAlign: "center"}}>
            <span><RiShoppingBagFill style={{color: 'orange',marginTop:'-5px'}}/><span style={{marginLeft: '5px'}}>Quantity : {quantity}</span></span>

            <span style={{marginLeft:"250px"}}><RiMoneyPoundBoxFill style={{color: 'green',marginTop:'-5px'}}/><span style={{marginLeft: '5px'}}></span>Total Price : {price}</span>
            </div>

            <button className="removebtn" onClick={RemoveItem}>Remove</button>
        </div>
        </Card>
    );
};

export default OrderDetails;