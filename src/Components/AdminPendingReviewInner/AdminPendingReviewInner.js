import React from 'react';

const AdminPendingReviewInner = (props) => {

    
    const {name,review,_id}=props.rv;

    const Approve=()=>
    {
          
        

        const ReviewInfo={name,review,_id};

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
            <h1>Name : {name}</h1>

            <p>Review : {review}</p>


            <button onClick={Approve}>Approve</button>

            <button onClick={Remove}>Remove</button>
        </div>
    );
};

export default AdminPendingReviewInner;