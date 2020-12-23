
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserInfo } from '../../Utilities/SessionData';
import './InsertItem.css';
import {AiFillTag} from "react-icons/ai";

const InsertItem = () => {


    let history=useHistory();

    if(getUserInfo().email!='outoftheboxdesh@gmail.com')
    {
        history.push('/home');
    }

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const [products, setProducts] = useState([]);

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

    useEffect(() => {

        fetch('http://localhost:5000/womensdressProducts')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [products]);

    const handleFileChange = (e) => {

        const newFile = e.target.files[0];
        setFile(newFile);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(info);
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

        //console.log(formData);

        fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)

                alert('succuessfully send');
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (

        <section className='cen'>
            <div >

            <span  style={{ 'fontFamily': 'cursive', 'fontSize': '3rem', marginLeft: '36.5%'}}><AiFillTag style={{color: 'orange'}}/><b className="logg">D</b>esh<b className="logg">M</b>art</span>
                <form onSubmit={handleSubmit}>

                    <fieldset onChange={onChangeValue}>

                        <legend style={{paddingTop: '30px',textAlign: 'center', marginBottom: '20px'}}><b>Choose Your Category</b></legend>


                        <div className="row" style={{fontSize: '20px'}}>

                            <div className='col-3'>
                        <label for="womensdress"> <input type="radio" value="womensdress" name="product" /><span style={{ marginLeft: '10px' }}>Women Dress</span> </label> <br />

                        <label for="electronics"> <input type="radio" value="electronics" name="product" /><span style={{ marginLeft: '10px' }}>Electronics</span></label><br />

                        <label for="beautypics"> <input type="radio" value="beautypics" name="product" /><span style={{ marginLeft: '10px' }}>Bauty Picks</span></label><br />

                        </div>   

                        <div className='col-3'>

                        <label for="smartproducts"> <input type="radio" value="smartproducts" name="product" /><span style={{ marginLeft: '10px' }}>Smart Products</span></label><br />
                          
                        


                        
                        <label for="bedding"> <input type="radio" value="bedding" name="product" /><span style={{ marginLeft: '10px' }}>Bedding</span></label><br />

                        <label for="light"> <input type="radio" value="light" name="product" /><span style={{ marginLeft: '10px' }}>Light</span></label><br />


                        </div>

                        <div className='col-3'>
                        <label for="computer"> <input type="radio" value="computer" name="product" /><span style={{ marginLeft: '10px' }}>Computer</span></label><br />

                        <label for="mensdress"> <input type="radio" value="mensdress" name="product" /><span style={{ marginLeft: '10px' }}>Mens Dress</span></label><br />

                        <label for="medical"> <input type="radio" value="medical" name="product" /><span style={{ marginLeft: '10px' }}>Medical</span></label><br />
                        </div>

                        <div className='col-3'>
                        <label for="laptab"> <input type="radio" value="labtab" name="product" /><span style={{ marginLeft: '10px' }}>Laptop and Tablet</span></label><br />
                        <label for="furniture"> <input type="radio" value="furniture" name="product" /><span style={{ marginLeft: '10px' }}>Furniture</span></label><br />


                        <label for="love"> <input type="radio" value="love" name="product" /><span style={{ marginLeft: '10px' }}>Love</span></label><br />

                        </div>

                        </div>



                    </fieldset>

                    

                    <div class="form-group">
                        <label for="exampleInputName1"><b>Name</b></label>
                        <input onBlur={handleBlur} type="text" class="form-control" name='name' id="exampleInputPassword1" placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputBrand1"><b>Brand</b></label>
                        <input onBlur={handleBlur} type="brand" class="form-control" name="brand" placeholder="Enter Brand Here" />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputBrand1"><b>Color</b></label>
                        <input onBlur={handleBlur} type="clr" class="form-control" name="clr" placeholder="Enter Color Here" />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputBrand1"><b>Made In</b></label>
                        <input onBlur={handleBlur} type="madein" class="form-control" name="madein" placeholder="Enter Origin Here" />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPrice1"><b>Price</b></label>
                        <input onBlur={handleBlur} type="price" class="form-control" name="price" placeholder="Enter Product Price Here" />

                    </div>

                    <div class="form-group">
                        <label for="exampleInputitemdetails1"><b>Item Details</b></label>
                        <textarea onBlur={handleBlur} class="form-control" name="itemdetails" placeholder="Write Something About Your Product" rows="10"></textarea>
                    </div>





                    <div className="form-group">
                        <label htmlFor="exampleInputImage1"><b>Upload a image</b></label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>

                    <button type="submit" class="btn btn-primary" style={{marginLeft: '47%',borderRadius: '20px',marginTop:'10px',marginBottom: '20px'}}>Submit</button>
                </form>


            </div>

            {
                products.map(doctor => <div className="col-md-4 col-sm-6 text-center">
                    {
                        <img style={{ height: '200px' }} src={`data:image/png;base64,${doctor.image.img}`} />

                    }
                    <h4>{doctor.name}</h4>


                    <h5>{doctor.price}</h5>
                </div>)
            }

            <div>



            </div>

        </section>
    );
};

export default InsertItem;