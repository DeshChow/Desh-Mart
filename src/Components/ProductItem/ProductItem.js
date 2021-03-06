import React from 'react';
import './ProductItem.css';
import {Link} from 'react-router-dom';

const ProductItem = (props) => {

    const { name, price, brand, color, madeIn, quantity,_id }=props.pd;

    const category=props.category;
    return (
        <div className='product'>

            <div>

            <img style={{ height: '250px' , width: '270px'}} src={`data:image/png;base64,${props.pd.image.img}`} />

            </div>

            <div className='product-line' style={{textAlign: 'justify'}}>

            <h4 className='product-name'><Link to={'/product/'+_id+'/'+category}>{name}</Link></h4><br/>

            <h6> <b>Brand<span  style={{paddingLeft:'30px'}}>:</span> </b> {brand}</h6>

            <h6><b>Color <span  style={{paddingLeft:'30px'}}>:</span></b> {color}</h6>

            <h6><b>Made In <span  style={{paddingLeft:'10px'}}>:</span></b> {madeIn}</h6><br/>

            <p>Price : <span className='dollar'>{price}</span></p>

            </div>


        </div>
    );
};

export default ProductItem;