import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserInfo } from '../../Utilities/SessionData';

import './DeleteItem.css';

const DeleteItem = () => {


      let history=useHistory();

    if(getUserInfo().email!='outoftheboxdesh@gmail.com')
    {
        history.push('/home');
    }


    const [info, setInfo] = useState({});
    

    const handleBlur = e => {

        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const onChangeValue = e => {

        const newInfo = { ...info };
        newInfo.category = e.target.value;
        setInfo(newInfo);

    }

    const handleSubmit = (e) => {
        e.preventDefault();


        console.log(info);

       const id=info.id,category=info.category;

       const url='http://localhost:5000/delete/'+id+'/'+category;

       console.log(url)

        fetch(url, {
            method: 'DELETE'
           
        })
            .then(response => response.json())
            .then(data => {
                //console.log(data)

                if(data)alert('succuessfully deleted');
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='cen'>

            <h1>deleted</h1>

            <form onSubmit={handleSubmit}>
            <fieldset onChange={onChangeValue}>

                        <legend>Choose Your Category</legend>

                        <label for="womensdress"> <input type="radio" value="womensdress" name="product" /><span style={{ marginLeft: '10px' }}>Women Dress</span> </label> <br />

                        <label for="electronics"> <input type="radio" value="electronics" name="product" /><span style={{ marginLeft: '10px' }}>Electronics</span></label><br />

                        <label for="beautypics"> <input type="radio" value="beautypics" name="product" /><span style={{ marginLeft: '10px' }}>Bauty Picks</span></label><br />


                        <label for="smartproducts"> <input type="radio" value="smartproducts" name="product" /><span style={{ marginLeft: '10px' }}>Smart Products</span></label><br />

                        <label for="bedding"> <input type="radio" value="bedding" name="product" /><span style={{ marginLeft: '10px' }}>Bedding</span></label><br />

                        <label for="light"> <input type="radio" value="light" name="product" /><span style={{ marginLeft: '10px' }}>Light</span></label><br />

                        <label for="computer"> <input type="radio" value="computer" name="product" /><span style={{ marginLeft: '10px' }}>Computer</span></label><br />

                        <label for="mensdress"> <input type="radio" value="mensdress" name="product" /><span style={{ marginLeft: '10px' }}>Mens Dress</span></label><br />

                        <label for="medical"> <input type="radio" value="medical" name="product" /><span style={{ marginLeft: '10px' }}>Medical</span></label><br />

                        <label for="laptab"> <input type="radio" value="labtab" name="product" /><span style={{ marginLeft: '10px' }}>Laptop and Tablet</span></label><br />
                        <label for="furniture"> <input type="radio" value="furniture" name="product" /><span style={{ marginLeft: '10px' }}>Furniture</span></label><br />


                        <label for="love"> <input type="radio" value="love" name="product" /><span style={{ marginLeft: '10px' }}>Love</span></label><br />

        


                    </fieldset>

                    <div class="form-group">
                        <label for="exampleInputid1">Delete a item</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name='id' id="exampleInputid1" placeholder="Write your product id" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            
        </div>
    );
};

export default DeleteItem;