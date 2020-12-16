import React, { useState, useEffect } from 'react';

const UpdateItem = () => {

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

        const id=info.id;

        const category=info.category;

        const price=info.price;

        const product={id,price,category};

           fetch('http://localhost:5000/updateProduct',
           {
               method:'PATCH',
               headers:{'Content-Type':'application/json'},
               body:JSON.stringify(product)
           })
           .then(res=>res.json())
           .then(result=>
            {
                if(result)alert('Successfully updated');
            })

    }


    return (
        <div className='cen'>

            <h1>Update</h1>

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
                    <label for="exampleInputid1">Update a item</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name='id' id="exampleInputid1" placeholder="Write your product id" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPrice1">Price</label>
                    <input onBlur={handleBlur} type="price" class="form-control" name="price" placeholder="Enter Product Price" />

                </div>


                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    );
};

export default UpdateItem;