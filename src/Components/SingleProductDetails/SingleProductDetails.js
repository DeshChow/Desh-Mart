import React, { useState, useEffect } from 'react';

import { useHistory, useParams } from 'react-router-dom';
import { ClearCart, DeleteItem, InsertItem } from '../../Utilities/databaseManager';
import './SingleProductDetails.css';


const SingleProductDetails = () => {

    const { _id, category } = useParams();


    console.log(_id, category);

    const [product, setProduct] = useState({});

    const history=useHistory();

    const { name, brand, color, madeIn, price, itemDetails,quantity } = product;

    console.log(product);

    const [curQuantity,setCurQuantity]=useState(1);


    const Counter=(now)=>
    {
        if(now=='-')setCurQuantity(curQuantity-1);

        else setCurQuantity(curQuantity+1);
    }



    useEffect(() => {

        fetch('http://localhost:5000/product/' + _id + '/' + category)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [_id]);

    

    const ConvertToNumber=(str)=>
    {
        return parseInt(str.substring(1));
    }
      

    const AddToCart=()=>
    {  

         let value=
         {
             id : _id,

             name:name,

             price : ConvertToNumber(price)*curQuantity,

             quantity:curQuantity,

             category:category,

             
         };
        
          InsertItem(_id,value);

    }

    const Review=()=>
    {
          history.push('/ReviewCart');
    }


  

    return (
        <div className="product row">

            <div className="col-md-6 center">

                {
                    product.name && <img style={{ height: '500px', width: '100%', marginLeft: '10px' }} src={`data:image/png;base64,${product.image.img}`} />
                }

            </div>

            <div className="col-md-4">

                <h4 className='product-name' >{name}</h4>

                <h6> <b>Brand :</b> {brand}</h6>

                <h6><b>Color :</b> {color}</h6>

                <h6><b>Made In :</b> {madeIn}</h6><br />

                <p>Price : <span className='dollar'>{price}</span></p>

                <div>

                    <div>
                    <button className="spinner" role='button' onClick={() => Counter('-')}>-</button>

                    <span className="spin">{curQuantity}</span>

                    <button className="spinner" role='button' onClick={() => Counter('+')}>+</button>
                    
                    </div>

                    <br />

                    <button onClick={AddToCart}>Add to Cart</button>
                </div>

                <h6>About this item</h6>

               

                <p>{itemDetails}</p>

            </div>
            <div className="col-md-2">
                <p>I am cart</p>

                <button onClick={Review}>Review Your Cart</button>

            </div>


        </div>
    );
};

export default SingleProductDetails;