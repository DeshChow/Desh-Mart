import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {RiMoneyPoundBoxFill} from "react-icons/ri";
import {RiShoppingBagFill} from "react-icons/ri";
import './SinglePendingOrderInner.css';

const SinglePendingOrderInner = ({cart}) => {


    const {name,price,quantity,id,category}=cart;
    return (
        <div>


        <Card style={{margin: '10px 200px 0px 200px', borderRadius: '20px',height: '200px'}} className="pendinginnerstyle">
        


                <h4 style={{margin: '10px 20px 0px 20px', textAlign: 'justify'}}><b><Link style={{color: '#423E3D', fontFamily: 'Amazon'}} to={'/product/'+id+'/'+category}><a  style={{color: '#423E3D'}} className="revhov">{name}</a></Link></b></h4><br/>


                  <div style={{fontSize: '22px',textAlign: "center"}}>
                   <span><RiShoppingBagFill style={{color: 'orange',marginTop:'-5px'}}/><span style={{marginLeft: '5px'}}>Quantity : <span className="dollar">{quantity}</span></span></span>

                   <span style={{marginLeft:"250px"}}><RiMoneyPoundBoxFill style={{color: 'green',marginTop:'-5px'}}/><span style={{marginLeft: '5px'}}></span>Price : <span className="dollar">${price}</span></span>
                 </div>
        </Card>

                     


        </div>
    );
};

export default SinglePendingOrderInner;