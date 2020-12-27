

import './Details.css';
import React, {  useEffect, useState } from 'react';

import ProductItem from '../ProductItem/ProductItem';
import { useParams } from 'react-router-dom';
import FootItem from '../FootItem/FootItem';
import SideItem from '../SideItem/SideItem';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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


        isAvailable()?
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

        </>:

<Loader className='App' type="Oval" color="#149DF8" height={80} width={80} />
    );
};

export default Details;