import React from 'react';

const SinglePendingOrderInner = ({cart}) => {


    const {name,price,quantity}=cart;
    return (
        <div>
                         <h1>Name :{name}</h1>

                         <h2>Price : {price}</h2>

                         <h3>Quantity : {quantity}</h3>

                     


                    </div>
    );
};

export default SinglePendingOrderInner;