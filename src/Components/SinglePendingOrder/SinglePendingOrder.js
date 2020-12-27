import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import SinglePendingOrderInner from '../SinglePendingOrderInner/SinglePendingOrderInner';
import './SinglePendingOrder.css';
import orderback from '../../images/orderback.jpg';
import {FcBusinessman} from "react-icons/fc";
import {AiTwotoneMail} from "react-icons/ai";
import {ImLocation2} from "react-icons/im";
import swal from 'sweetalert';


const SinglePendingOrder = ({ order, collection }) => {

    const { _id, Cart, buyerDetails, TotalPrice } = order;


    const { name, email, address } = buyerDetails;


    const DeleteOrder = () => {
        const url = 'http://localhost:5000/deleteOrder/' + collection + '/' + _id;

        // console.log(url)

        fetch(url, {
            method: 'DELETE'

        })
            .then(response => response.json())
            .then(data => {
                //console.log(data)

               

                if(data)
                window.location.reload(false);
            })
            .catch(error => {
                console.error(error)
            })
    }




    return (
        
        
   
        <div>
           <Card style={{height: 'auto', backgroundColor:'#fceae8'}} className="revcard">
            <br></br>
            <div id="pendingstyle" style={{marginLeft: '110px'}}>
             <div><span style={{fontSize: '20px'}}><FcBusinessman size="2rem"/><b>{name}</b></span></div>
             <div><span style={{fontSize: '20px'}}><AiTwotoneMail size="2rem" style={{color: 'red'}}/><b>{email}</b></span></div>
             <div><span style={{fontSize: '20px'}}><ImLocation2 size="2rem" style={{color: 'yellowgreen'}}/><b>{address}</b></span></div>
            </div>
            
            <br></br>

            {
                Cart.map(cart => <SinglePendingOrderInner cart={cart} key={cart.id}></SinglePendingOrderInner>)
            }

            <br></br>

             <h4 style={{textAlign: 'center', marginBottom: '20px'}} ><b>Total Price : <span style={{fontSize: '30px', color: '#F9A805'}}>${TotalPrice}</span> </b></h4>
             <span> <button className="pendingorderdelete" onClick={DeleteOrder} >DELETE</button ></span>
            </Card>
            <br></br>
            <br></br>

        </div>


    );
};

export default SinglePendingOrder;