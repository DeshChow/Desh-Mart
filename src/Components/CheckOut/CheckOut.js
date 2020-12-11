import React,{useState,useEffect} from 'react';

import {  getFullCart,ClearCart, DeleteItem, InsertItem } from '../../Utilities/databaseManager';

const CheckOut = () => {

    

        const [info, setInfo] = useState({});
       
    
        //const [products, setProducts] = useState([]);
    
        const handleBlur = e => {
    
            const newInfo = { ...info };
            newInfo[e.target.name] = e.target.value;
            setInfo(newInfo);
        }
    
      
    
        const getTotalPrice=(Cart)=>
        {
           

            return Cart.reduce((total,prod)=> total+=prod.price,0);
        
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
    
            /*// console.log(info);
            // console.log(file);
            const formData = new FormData()
            formData.append('file', file)
            formData.append('name', info.name)
            formData.append('price', info.price)
            formData.append('category', info.category)
            formData.append('brand', info.brand)
            formData.append('color', info.clr)
            formData.append('madeIn', info.madein)
            formData.append('itemDetails', info.itemdetails)
            formData.append('quantity', 1)
    
            //console.log(formData);*/

            const Cart=getFullCart();

            const buyerDetails=info;

            const TotalPrice = getTotalPrice(Cart);

            console.log(TotalPrice);


            const data={buyerDetails,Cart,TotalPrice};
    
            fetch('http://localhost:5000/orderSave',
            {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(result=>
             {
                 if(result)
                 {
                     alert('Successfully saved  buyer order');

                     ClearCart();
                 }
             })
 
        }

    
    return (
        <section>
            <div className='container'>


                <form onSubmit={handleSubmit}>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name='email' id="exampleInputEmail1" placeholder="Email" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name" />

                    </div>

                    <div class="form-group">
                        <label for="exampleInputaddress1">Address</label>
                        <input onBlur={handleBlur} type="address" class="form-control" name="address" placeholder="Address" />

                    </div>

                    <div class="form-group">
                        <label for="exampleInputPhone1">Phone</label>
                        <input onBlur={handleBlur} type="phone" class="form-control" name="phone" placeholder="Enter Phone Number Here" />

                    </div>


                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>


            </div>

        </section>
    );
};

export default CheckOut;