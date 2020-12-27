import React,{useState,useEffect} from 'react';

import {  getFullCart,ClearCart, DeleteItem, InsertItem } from '../../Utilities/databaseManager';
import { getUserInfo } from '../../Utilities/SessionData';
import {AiFillTag} from "react-icons/ai";
import './CheckOut.css';
import BodyClassName from 'react-body-classname';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
const CheckOut = () => {

    

        const [info, setInfo] = useState({});

        const [loginUser,setLoginUser]=useState({});

        const history=useHistory();
       
    
        //const [products, setProducts] = useState([]);
    
        const handleBlur = e => {
    
            const newInfo = { ...info };
            newInfo[e.target.name] = e.target.value;
            setInfo(newInfo);
        }

        useEffect(() => {

            setLoginUser(getUserInfo());
          
        }, []);
    
      
    
        const getTotalPrice=(Cart)=>
        {
           

            return Cart.reduce((total,prod)=> total+=prod.price,0);
        
        }
    
        const handleSubmit = (e) => {


            if(getFullCart().length==0)
            {
               

                swal("You Cannot Place a Empty Order!");

                history.push('/ReviewCart');

                return ;
            }
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
                    swal("Good job!", "Successfully Order Done!", "success");

                     ClearCart();
                 }
             })
 
        }

    
    return (
         <BodyClassName className="backcolr">
        <section>
            <div className='container' style={{backgroundColor: 'powderblue'}}>
            
            <span><AiFillTag size="3rem" style={{color:'orange', marginTop: '-25px', marginLeft: '250px'}}/>
            <span  style={{ 'fontFamily': 'cursive', 'fontSize': '2rem'}}><b className="logg">D</b>esh<b className="logg">M</b>art</span></span>

            <div style={{margin: '30px'}}>
                <form onSubmit={handleSubmit}>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input onBlur={handleBlur} type="text" defaultValue={loginUser.email} class="form-control" name='email' id="exampleInputEmail1" placeholder="Email" required/>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input onBlur={handleBlur} type="text" defaultValue={loginUser.displayName} class="form-control" name="name" placeholder="Name" required />

                    </div>

                    <div class="form-group">
                        <label for="exampleInputaddress1">Address</label>
                        <input onBlur={handleBlur} type="address" class="form-control" name="address" placeholder="Address" required />

                    </div>

                    <div class="form-group">
                        <label for="exampleInputPhone1">Phone</label>
                        <input onBlur={handleBlur} type="phone" class="form-control" name="phone" placeholder="Enter Phone Number Here" required />

                    </div>


                    <button className="sub" type="submit">Submit</button>
                </form>
            </div>

            </div>

        </section>
        </BodyClassName>
        
    );
};

export default CheckOut;