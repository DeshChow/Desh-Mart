import React from 'react';

const OrderSummaryDetails = (props) => {

    const cartDetails=props.cartDetails;

    let sum = 0, currentShippingCost = 0;

    for (var i = 0; i < cartDetails.length; i++) {
        sum += cartDetails[i].price;
    }

    console.log(sum)

    if(sum==0)currentShippingCost=0;

    else if (sum > 100) currentShippingCost = 30*cartDetails.length;

    else currentShippingCost = 50*cartDetails.length;

    const total_Cost = sum + currentShippingCost;
    return (
        <div>
         <h4>Order Summary</h4>
                <p>Item Orders : {cartDetails.length}</p>


                <p>Product Price : {sum}</p>

                <p>Shipping Cost : {currentShippingCost}</p>

                <p>Total Price : {total_Cost}</p>




                
        </div>
    );
};

export default OrderSummaryDetails;