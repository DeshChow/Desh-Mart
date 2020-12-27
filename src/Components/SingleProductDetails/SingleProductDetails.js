import React, { useState, useEffect } from 'react';

import { useHistory, useParams } from 'react-router-dom';
import { ClearCart, DeleteItem, getFullCart, InsertItem } from '../../Utilities/databaseManager';
import OrderSummaryDetails from '../OrderSummaryDetails/OrderSummaryDetails';
import './SingleProductDetails.css';
import {AiOutlineShoppingCart} from "react-icons/ai";
import FootItem from '../FootItem/FootItem';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const SingleProductDetails = () => {

    const { _id, category } = useParams();


    // console.log(_id, category);

    const [product, setProduct] = useState({});

    const history = useHistory();

    const { name, brand, color, madeIn, price, itemDetails, quantity } = product;

    console.log(product);

    const [curQuantity, setCurQuantity] = useState(1);

    const [cartDetails, setCartDetails] = useState([]);

   


    const Counter = (now) => {
        if (now == '-') setCurQuantity(Math.max(1,curQuantity - 1));

        else setCurQuantity(curQuantity + 1);
    }



    useEffect(() => {

        fetch('http://localhost:5000/product/' + _id + '/' + category)
            .then(res => res.json())
            .then(data => setProduct(data));


        setCartDetails(getFullCart());








    }, [_id]);


   








    const ConvertToNumber = (str) => {

        return parseInt(str.substring(1));
    }


    const AddToCart = () => {

        let value =
        {
            id: _id,

            name: name,

            price: ConvertToNumber(price) * curQuantity,

            quantity: curQuantity,

            category: category,


        };

        InsertItem(_id, value);

        setCartDetails(getFullCart());




    }

    const Review = () => {
        history.push('/ReviewCart');
    }









    return (

        product.name ? 
        <div>
        <div className="singleproduct row">

            <div className="col-md-5">
                  <div className="center">
                
                   <img className="singleproductimage" src={`data:image/png;base64,${product.image.img}`} />

                   </div>
                   <p style={{textAlign: 'center', marginTop: '-40px'}}>Roll over image to zoom in</p>
                
            </div>

            <div className="col-md-5 itemStyle">

                <h4 className='product-name' >{name}</h4>

                <br></br>

                <h6> <b>Brand <span style={{paddingLeft:'30px'}}>:</span></b> {brand}</h6>

                <h6><b>Color <span style={{paddingLeft:'34px'}}>:</span></b> {color}</h6>

                <h6><b>Made In <span style={{paddingLeft:'14px'}}>:</span></b> {madeIn}</h6><br />

                <p><span style={{color: '#565959!important'}}>Price :</span> <span className='dollar'>{price}</span></p>


                <div>

                    <div>
                        <span style={{marginRight:'10px'}}>Quantity: </span>
                        <button className="spinner" role='button' onClick={() => Counter('-')}>-</button>

                        <span className="spin">{curQuantity}</span>

                        <button className="spinner" role='button' onClick={() => Counter('+')}>+</button>
                        <span className="addtocartsp">{product.name ? <button className="addtocartbtn" onClick={AddToCart}><AiOutlineShoppingCart className="hov" size="1.5em" style={{paddingRight:'5px',paddingBottom: '3px', color:'black'}}/><span className="addbtntext">Add to Cart</span></button> : <span></span>}</span>
                    </div>

                   
                </div>
                <br></br>
                <br></br>
                <h6>About this item</h6>

                <p>{itemDetails}</p>


            </div>
            <div className="col-md-2">


              <OrderSummaryDetails cartDetails={cartDetails}></OrderSummaryDetails>

              <button className="addtocartbtn1" onClick={Review}>BUY NOW</button>
            


            </div>

           

        </div>

        <FootItem></FootItem>

        </div>:<Loader className='App' type="Oval" color="#149DF8" height={80} width={80} />

    );
};

export default SingleProductDetails;