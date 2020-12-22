import React from 'react';
import SimpleCard from '../SimpleCard/SimpleCard';
import womensdress from '../../images/womensdress.jpg'
import smartproducts from '../../images/smartproducts.jpg'
import beautypics from '../../images/beautypics.jpg'
import bedding from '../../images/bedding.jpg'

import electronics from '../../images/electronics.jpg'
import mensdress from '../../images/mensdress.jpg'
import computer from '../../images/computer.jpg'
import light from '../../images/light.jpg'

import medical from '../../images/medical.jpg'
import love from '../../images/love.jpg'
import laptab from '../../images/laptab.jpg'
import furniture from '../../images/furniture.jpg'

import './Category.css'
import UserReview from '../UserReview/UserReview';

const firstRowData=[
    {
        category: 'womensdress',
        title : 'Comfy styles for her',
        img : womensdress,


    },
    {
        category: 'beautypics',
        title : 'Beauty picks',
        img : beautypics,


    },
    {
        category: 'smartproducts',
        title : 'Start your holiday early',
        img : smartproducts,


    },
    {
        category: 'bedding',
        title : 'Explore home bedding',
        img : bedding,


    },
]

const secondRowData=[
    {
        category: 'electronics',
        title : 'Electronics',
        img : electronics,


    },
    {
        category: 'light',
        title : 'Create with strip lights',
        img : light,


    },
    {
        category: 'computer',
        title : 'Computers & Accessories',
        img : computer,


    },
    {
        category: 'mensdress',
        title : 'Style As Your Wish',
        img : mensdress,


    },
]


const thirdRowData=[
    {
        category: 'medical',
        title : 'Take Care Your Health',
        img : medical,


    },
    {
        category: 'laptab',
        title : 'Shop Laptops & Tablets',
        img : laptab,


    },
    {
        category: 'furniture',
        title : 'Modern Outdoor Tool',
        img : furniture,



    },
    {
        category: 'love',
        title : 'Spread Your Love',
        img : love,


    },
]


const Category = () => {
    return (
       <section >
        
              <div className='row categorycontainer'>
                 
                    {
             firstRowData.map(data=><SimpleCard data={data}></SimpleCard>)

                    }
              </div>

              <div className='row categorycontainer'>
                 
                 {
          secondRowData.map(data=><SimpleCard data={data}></SimpleCard>)

                 }
           </div>

           
           <div className='row categorycontainer'>
                 
                 {
         thirdRowData.map(data=><SimpleCard data={data}></SimpleCard>)

                 }
           </div>


       </section>
    );
};

export default Category;