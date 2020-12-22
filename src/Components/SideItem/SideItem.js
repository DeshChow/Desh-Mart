import React from 'react';
import { Link } from 'react-router-dom';
import './SideItem.css';
import {GiCheckMark} from "react-icons/gi";

const SideItem = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2  py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/Details/womensdress" className="textblack">

                        <GiCheckMark style={{color: '#00B803', marginTop: '-2px'}}/><span>Womens Dress</span>

                    </Link>
                </li>
                <li>

                    <Link to="/Details/beautypics" className="textblack">

                        <GiCheckMark style={{color: '#00B803', marginTop: '-2px'}}/><span>Beauty picks</span>

                    </Link>

                </li>

                <li>

                    <Link to="/Details/smartproducts" className="textblack">

                        <GiCheckMark style={{color: '#00B803', marginTop: '-2px'}}/><span>Smart Products</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/bedding" className="textblack">

                        <GiCheckMark style={{color: '#00B803', marginTop: '-2px'}}/><span>Bedding</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/electronics" className="textblack">

                        <GiCheckMark style={{color: '#00B803', marginTop: '-2px'}}/><span>Electronics</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/light" className="textblack">

                        <GiCheckMark style={{color: '#00B803', marginTop: '-2px'}}/><span>Light</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/computer" className="textblack">

                        <GiCheckMark style={{color: '#00B803', marginTop: '-2px'}}/><span>Computer</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/mensdress" className="textblack">

                        <GiCheckMark style={{color: '#00B803', marginTop: '-2px'}}/><span>Mens Dress</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/medical" className="textblack">

                        <GiCheckMark style={{color: '#00B803', marginTop: '-2px'}}/><span>Medical</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/laptab" className="textblack">

                        <GiCheckMark style={{color: '#00B803', marginTop: '-2px'}}/><span>Laptop and Tablet</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/furniture" className="textblack">

                        <GiCheckMark style={{color: '#00B803', marginTop: '-2px'}}/><span>Furniture</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/love" className="textblack">

                        <GiCheckMark style={{color: '#00B803', marginTop: '-2px'}}/><span>Love</span>

                    </Link>

                </li>


            </ul>

        </div>
    );
};

export default SideItem;