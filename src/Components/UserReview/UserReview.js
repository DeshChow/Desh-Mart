import React, {useState}from 'react';

import './UserReview.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserReview = () => {


    const [info, setInfo] = useState({});


    const handleBlur = e => {

        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit=(e)=>
    {

        e.preventDefault();

        const review=info.review;

        const name=info.name;

        const ReviewInfo={name,review};

        console.log(ReviewInfo);

           fetch('http://localhost:5000/addPendingReview',
           {
               method:'POST',
               headers:{'Content-Type':'application/json'},
               body:JSON.stringify(ReviewInfo)
           })
           .then(res=>res.json())
           .then(result=>
            {
                if(result)alert('Successfully review');
            })

    }
    return (


        <div id="contactus">

            <div>
                <h3>LET'S STAY IN TOUCH</h3>


                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputName1"></label>
                        <input onBlur={handleBlur} type="text" class="form-control" name='name' id="exampleInputPassword1" placeholder="Name" />
                    </div>


                    <div class="form-group">
                        <label for="exampleInputitemreview1"></label>
                        <textarea onBlur={handleBlur} class="form-control" name="review" rows="07" placeholder='Drop Your Review Here'></textarea>
                    </div>

                    <button type="submit" class="reviewbtn">Submit</button>

                </form>


            </div>
        </div>



    );
};

export default UserReview;