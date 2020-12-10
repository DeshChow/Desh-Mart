import React,{useState,useEffect } from 'react';

import { useParams} from 'react-router-dom';
import './SingleProductDetails.css';


const SingleProductDetails = () => {

    const {_id,category}=useParams();


    console.log(_id,category);

    const [product,setProduct]=useState({});

    const {name,brand,color,madeIn,price,itemDetails}=product;

    console.log(product);

   

    useEffect(()=>
    {
           
        fetch('http://localhost:5000/product/'+_id+'/'+category)
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[_id]);

    
    return (
        <div className="product row">

            <div className="col-md-6 center">

           {
           product.name &&  <img style={{ height: '500px' , width: '100%', marginLeft:'10px'}} src={`data:image/png;base64,${product.image.img}`} />
           }

            </div>

            <div className="col-md-4">

            <h4 className='product-name' >{name}</h4>

            <h6> <b>Brand :</b> {brand}</h6>

            <h6><b>Color :</b> {color}</h6>

            <h6><b>Made In :</b> {madeIn}</h6><br/>

            <p>Price : <span className='dollar'>{price}</span></p>

            <h6>About this item</h6>

            <p>{itemDetails}</p>

            </div>
            <div className="col-md-2">
                <p>I am cart</p>

            </div>


        </div>
    );
};

export default SingleProductDetails;