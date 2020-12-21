import React from 'react';
import './FootItem.css';
import {FaFacebook} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {FaInstagramSquare} from "react-icons/fa";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {AiFillTag} from "react-icons/ai";

const FootItem = () => {
    return (
        <div className="footbody" id="foot">
        <footer class="footer">
            <div class="l-footer">
            <span><AiFillTag size="3rem" style={{color:'orange', marginTop: '-25px'}}/></span> 
               <span  style={{ 'fontFamily': 'cursive', 'fontSize': '3rem'}}><b className="logg">D</b>esh<b className="logg">M</b>art</span>
                <p style={{ textAlign: 'justify'}}>Our mission is to continually raise the bar of the customer experience by using the internet and technology to help consumers find, discover and buy anything, and empower businesses and content creators to maximise their success. We aim to be Earth's most customer centric company.</p>

                    <ul class="social-icons">
                        <li><a  className="facebook" href="https://web.facebook.com/profile.php?id=100060109186720"><FaFacebook size="1.5em"/></a></li>
                        <li><a href='https://twitter.com/MartDesh' className="twitter" ><AiFillTwitterCircle size="1.5em"/></a></li>
                        <li><a className="instagram" href="https://www.instagram.com/deshmart2021/"><FaInstagramSquare size="1.5em"/></a></li>
                        <li><a className="whatsapp" href="https://api.whatsapp.com/send?phone=+8801778482201"><AiOutlineWhatsApp size="1.5em"/></a></li>   
                    </ul>
            </div>
            <ul class="r-footer">
                <li>
                    <h2 className="footh2">
                        Social</h2>
                    <ul class="box">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Pinterest</a></li>
                        <li><a href="#">Dribbble</a></li>
                    </ul>
                </li>
                <li class="features">
                    <h2 className="footh2">
                        Information</h2>
                    <ul class="box h-box">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Tickets</a></li>
                        <li><a href="#">Certifications</a></li>
                        <li><a href="#">Customer Service</a></li>
                    </ul>
                </li>
                <li>
                    <h2 className="footh2">
                        Legal</h2>
                    <ul class="box">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Contract</a></li>
                    </ul>
                </li>
            </ul>
            <div class="b-footer">
                <p>
                    All rights reserved by ©CompanyName 2020 </p>
            </div>
        </footer>

        </div>
    );
};

export default FootItem;