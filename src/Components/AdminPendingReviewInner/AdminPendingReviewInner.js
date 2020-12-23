import React from 'react';
import { Card } from 'react-bootstrap';
import {MdRateReview} from "react-icons/md";
import {FcBusinessman} from "react-icons/fc";
import {MdDateRange} from "react-icons/md";
import './AdminPendingReviewInner.css'

const AdminPendingReviewInner = (props) => {

    
    const {name,review,_id,reviewDate}=props.rv;

    const {day,month,year}=reviewDate;

    const Approve=()=>
    {
          
        

        const ReviewInfo={name,review,_id,reviewDate};

        console.log(ReviewInfo);

           fetch('http://localhost:5000/addReview',
           {
               method:'POST',
               headers:{'Content-Type':'application/json'},
               body:JSON.stringify(ReviewInfo)
           })
           .then(res=>res.json())
           .then(result=>
            {
                if(result)
                {
                    alert('Successfully review added');

                    window.location.reload(false);
                }
            })

    }

    const Remove=()=>
    {
          
        

        const ReviewInfo={_id};

        console.log(ReviewInfo);

           fetch('http://localhost:5000/deletePendingReview',
           {
               method:'DELETE',
               headers:{'Content-Type':'application/json'},
               body:JSON.stringify(ReviewInfo)
           })
           .then(res=>res.json())
           .then(result=>
            {
                if(result)
                {
                    alert('Successfully review deleted');

                    window.location.reload(false);
                }
            })

    }
    return (
        <div>

            <Card style={{height: '450px', marginTop: '50px',  border: '2px solid gray', borderRadius: '5px'}}  classname="pendingcardrev">
             
            <div className='row'>

                <div className='col-5'>
            <MdRateReview size="10rem" style={{color: 'green'}}/>
            </div>
               <div className='col-7' style={{marginTop: '50px'}}>
               <span><FcBusinessman size="2rem" style={{marginTop: '-5px'}}/><b style={{fontSize: '20px'}}>{name}</b></span>
               <p style={{marginLeft: '10px'}}><MdDateRange/><span style={{marginLeft: '7px'}} >{day}/{month}/{year}</span></p>
               </div>
            </div>
              <br></br>

              <br></br>
               <p style={{textAlign: 'center'}}>{review}</p>

               <br></br>

         
               <button className="finalbtn1" onClick={Approve}>Approve</button>

               <br></br>

               <button className="finalbtn2" onClick={Remove}>Remove</button>
              
            </Card>
        </div>
    );
};

export default AdminPendingReviewInner;