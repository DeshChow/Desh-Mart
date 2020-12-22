

import './Details.css';
import React, {  useEffect, useState } from 'react';

import ProductItem from '../ProductItem/ProductItem';
import { useParams } from 'react-router-dom';
import FootItem from '../FootItem/FootItem';
import SideItem from '../SideItem/SideItem';

const Details = () => {

    


    const [products,setProducts]=useState([]);

    const {category}=useParams();
    


    useEffect(()=>
    {      

        console.log('http://localhost:5000/'+category);

           fetch('http://localhost:5000/products/'+category)
           .then(res=>res.json())
           .then(data=>setProducts(data));

    },[products])

    const isAvailable=()=>
    {
         if(products.length)return true;

         else return false;
    }
    return (

        <>

       
    
         
         {
            isAvailable() && <SideItem></SideItem>
         }

    
     

        <div>
        <div style={{marginLeft:'300px'}} className="mar">
         

              {

                  products.map(pd=><ProductItem pd={pd} key={pd._id} category={category}></ProductItem>)
              }


        </div>

        

         
        {
            isAvailable() && <FootItem></FootItem>
         }

        </div>

        </>
    );
};

export default Details;