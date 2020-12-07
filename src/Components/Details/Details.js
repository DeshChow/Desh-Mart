

import './Details.css';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Details = () => {

    const [userAction,setUserAction]= useContext(UserContext);


    const [products,setProducts]=useState([]);


    useEffect(()=>
    {      

        console.log('http://localhost:5000/'+userAction.showtopic);

           fetch('http://localhost:5000/products/'+userAction.showtopic)
           .then(res=>res.json())
           .then(data=>setProducts(data));

    },[products])
    return (
        <div style={{marginLeft:'300px'}}>
           <h1>{userAction.showtopic}</h1>

              {

                  products.map(pd=><div>

                      <h1>Name : {pd.name}</h1>

                      <p>Price : {pd.price}</p>


                      <img style={{ height: '200px' }} src={`data:image/png;base64,${pd.image.img}`} />

                      
                       </div>)
              }


        </div>
    );
};

export default Details;