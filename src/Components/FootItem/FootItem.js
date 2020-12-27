import React from 'react';
import './FootItem.css';
import {FaFacebook} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {FaInstagramSquare} from "react-icons/fa";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {AiFillTag} from "react-icons/ai";
import { useHistory } from 'react-router-dom';

const FootItem = () => {


    let history=useHistory();

     const RouteChange=(path)=>
     {
           history.push(path);
     }
    return (
        <div className="footbody" id="foot">
        <footer class="footer">
            <div class="l-footer">
            <span><AiFillTag size="3rem" style={{color:'orange', marginTop: '-25px'}}/></span> 
               <span  style={{ 'fontFamily': 'cursive', 'fontSize': '3rem'}}><b className="logg">D</b>esh<b className="logg">M</b>art</span>
            <br></br>
            <br></br>
                <p style={{ textAlign: 'justify'}}>Our mission is to continually raise the bar of the customer experience by using the internet and technology to help consumers find, discover and buy anything, and empower businesses and content creators to maximise their success. We aim to be Earth's most customer centric company.</p>
                <br></br>
                <br></br>

                    <ul class="social-icons">
                        <li><a  className="facebook" href="https://web.facebook.com/profile.php?id=100060109186720"><FaFacebook size="1.5em"/></a></li>
                        <li><a href='https://twitter.com/MartDesh' className="twitter" ><AiFillTwitterCircle size="1.5em"/></a></li>
                        <li><a className="instagram" href="https://www.instagram.com/deshmart2021/"><FaInstagramSquare size="1.5em"/></a></li>
                        <li><a className="whatsapp" href="https://api.whatsapp.com/send?phone=+8801778482201"><AiOutlineWhatsApp size="1.5em"/></a></li>   
                    </ul>
            </div>
            <ul class="r-footer" >
                <li>
                    <b className="footh2" >
                        Product </b>
                    <ul class="box" style={{cursor:'pointer'}}>
                        <li><a onClick={()=>RouteChange('/Details/womensdress')}>Womens Zone</a></li>

                        <li><a onClick={()=>RouteChange('/Details/beautypics')}>Beauty Picks</a></li>

                        <li><a onClick={()=>RouteChange('/Details/smartproducts')}>Smart Products</a></li>

                        <li><a onClick={()=>RouteChange('/Details/bedding')}>Bedding</a></li>

                        <li><a onClick={()=>RouteChange('/Details/electronics')}>Electronics</a></li>

                        <li> <a onClick={()=>RouteChange('/Details/computer')}>Computer Accessories</a></li>

                        

                    </ul>
                </li>
                <li class="features" style={{marginTop:'-5px',marginLeft:'100px', fontSize: '18px', color: '#DDD8D8',cursor:'pointer'}}>
                        <br></br>
                        
                        <li><a onClick={()=>RouteChange('/Details/light')}>Home Decor</a></li>

                        <li> <a onClick={()=>RouteChange('/Details/mensdress')}>Mens Zone</a></li>

                        <li><a onClick={()=>RouteChange('/Details/medical')}>Medical</a></li>

                        <li><a onClick={()=>RouteChange('/Details/laptab')}>Gadget</a></li>

                        <li><a onClick={()=>RouteChange('/Details/furniture')}>Furniture</a></li>

                        <li> <a onClick={()=>RouteChange('/Details/love')}>Gift Item</a></li>

                        
                </li>
                <li class="features" style={{marginTop:'-5px', fontSize: '18px', color: '#DDD8D8'}}>
                    <b className="footh2" style={{marginLeft: '-30px'}}>Services</b>
                    <li style={{marginLeft: '-30px' }}><a style={{cursor:'pointer'}} onClick={()=>RouteChange('/ReviewShow')}>Reviews</a></li>
                    <li style={{marginLeft: '-30px'}}>Cash on Delivery</li>
                </li>
               
                <li >
                    <h2 className="footh2" style={{marginLeft: '-50px'}}>
                        Address</h2>
                    <ul class="box" style={{marginLeft: '-50px'}}>
                        <p>DeshMart(USA):</p>
                        <li>410 Terry Ave N, Seattle, WA 98109</li>
                        <br></br>
                        <p>DeshMart(UK):</p>
                        <li>60 Holborn Viaduct, Holborn, London EC1A 2FD, United Kingdom</li>
                    </ul>
                </li>
            </ul>
            <div class="b-footer">
                <p style={{marginTop: '-20px'}}> 
                    All rights reserved by ©DeshMart 2020 </p>
            </div>
        </footer>

        </div>
    );
};

export default FootItem;