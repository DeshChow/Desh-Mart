import React from 'react';
import { Link } from 'react-router-dom';
import './SideItem.css';

const SideItem = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/Details/womensdress" className="text-white">

                        <span>Womens Dress</span>

                    </Link>
                </li>
                <li>

                    <Link to="/Details/beautypics" className="text-white">

                        <span>Beauty picks</span>

                    </Link>

                </li>

                <li>

                    <Link to="/Details/smartproducts" className="text-white">

                        <span>Smart Products</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/bedding" className="text-white">

                        <span>Bedding</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/electronics" className="text-white">

                        <span>Electronics</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/light" className="text-white">

                        <span>Light</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/computer" className="text-white">

                        <span>Computer</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/mensdress" className="text-white">

                        <span>Mens Dress</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/medical" className="text-white">

                        <span>Medical</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/laptab" className="text-white">

                        <span>Laptop and Tablet</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/furniture" className="text-white">

                        <span>Furniture</span>

                    </Link>

                </li>
                <li>

                    <Link to="/Details/love" className="text-white">

                        <span>Love</span>

                    </Link>

                </li>


            </ul>

        </div>
    );
};

export default SideItem;