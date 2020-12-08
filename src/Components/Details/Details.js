

import './Details.css';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ProductItem from '../ProductItem/ProductItem';

const Details = () => {

    const [userAction,setUserAction]= useContext(UserContext);


    const [products,setProducts]=useState([]);


    useEffect(()=>
    {      

        console.log('http://localhost:5000/'+userAction.showtopic);

           fetch('http://localhost:5000/products/'+userAction.showtopic)
           .then(res=>res.json())
           .then(data=>setProducts(data));

    },[])
    return (
        <div style={{marginLeft:'300px'}}>
         

              {

                  products.map(pd=><ProductItem pd={pd} key={pd._id} category={userAction.showtopic}></ProductItem>)
              }


        </div>
    );
};

export default Details;