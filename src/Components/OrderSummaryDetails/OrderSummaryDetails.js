import React from 'react';
import {SiShopify} from 'react-icons/si'

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
         <h4 style={{fontFamily: "Apple Chancery,cursive",color: '#FC512F'}}><SiShopify style={{color:'#95C046',marginTop:'-8px'}}/>Order Summary</h4>
                
                <br></br>
                <div style={{paddingLeft: '25px'}}>
                <p>Item Orders <span style={{paddingLeft:'15px'}}> :</span> {cartDetails.length}</p>


                <p>Product Price <span style={{paddingLeft:'7px'}}> :</span> {sum}</p>

                <p>Shipping Cost <span style={{paddingLeft:'3px'}}> :</span> {currentShippingCost}</p>

                <p>Total Price <span style={{paddingLeft:'28px'}}> :</span> {total_Cost}</p>
                
                </div>
             
             <br></br>
                
        </div>
    );
};

export default OrderSummaryDetails;