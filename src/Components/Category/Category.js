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

const firstRowData=[
    {
        title : 'Comfy styles for her',
        img : womensdress,


    },
    {
        title : 'Beauty picks',
        img : beautypics,


    },
    {
        title : 'Start your holiday early',
        img : smartproducts,


    },
    {
        title : 'Explore home bedding',
        img : bedding,


    },
]

const secondRowData=[
    {
        title : 'Electronics',
        img : electronics,


    },
    {
        title : 'Create with strip lights',
        img : light,


    },
    {
        title : 'Computers & Accessories',
        img : computer,


    },
    {
    
        title : 'Style As Your Wish',
        img : mensdress,


    },
]


const thirdRowData=[
    {
        title : 'Take Care Your Health',
        img : medical,


    },
    {
        title : 'Shop Laptops & Tablets',
        img : laptab,


    },
    {
      
        title : 'Modern Outdoor Furniture',
        img : furniture,



    },
    {
    
        title : 'Spread Your Love',
        img : love,


    },
]


const Category = () => {
    return (
       <section>


        <div >


              <div className='row'>
                 
                    {
             firstRowData.map(data=><SimpleCard data={data}></SimpleCard>)

                    }
              </div>

              <div className='row'>
                 
                 {
          secondRowData.map(data=><SimpleCard data={data}></SimpleCard>)

                 }
           </div>

           
           <div className='row'>
                 
                 {
         thirdRowData.map(data=><SimpleCard data={data}></SimpleCard>)

                 }
           </div>



        </div>

            








       </section>
    );
};

export default Category;