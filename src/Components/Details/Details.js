

import './Details.css';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ProductItem from '../ProductItem/ProductItem';
import { useParams } from 'react-router-dom';
import FootItem from '../FootItem/FootItem';

const Details = () => {

    const [userAction,setUserAction]= useContext(UserContext);


    const [products,setProducts]=useState([]);

    const {category}=useParams();
    


    useEffect(()=>
    {      

        console.log('http://localhost:5000/'+category);

           fetch('http://localhost:5000/products/'+category)
           .then(res=>res.json())
           .then(data=>setProducts(data));

    },[products])
    return (

        <div>
        <div style={{marginLeft:'300px'}} className="mar">
         

              {

                  products.map(pd=><ProductItem pd={pd} key={pd._id} category={category}></ProductItem>)
              }


        </div>

        {products.length &&  <FootItem></FootItem>} 

        </div>
    );
};

export default Details;