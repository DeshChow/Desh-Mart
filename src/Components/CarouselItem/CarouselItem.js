import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import gift from '../../images/gift.jpg'
import holiday from '../../images/holiday.jpg'
import specialoffer from '../../images/specialoffer.jpg' 
import beauty from '../../images/beauty.jpg' 

import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

const CarouselItem = () => {

  const history=useHistory();

  const handleClick=(path)=>
  {
    history.push('/Details/'+path);
  }
    return (
      <Carousel indicators={false}>

<Carousel.Item>
        <img
          className="d-block w-100"
          src={beauty}
          style={{'maxHeight': '80vh'}}

          onClick={()=>handleClick('beautypics')}
         
        />
        </Carousel.Item>
      
        <Carousel.Item>
      
        <img
          className="d-block w-100"
          src={gift}
          style={{'maxHeight': '80vh'}}
          onClick={()=>handleClick('love')}
         
        />
    
    </Carousel.Item>
    <Carousel.Item>
      
        <img
          className="d-block w-100"
          
          src={specialoffer}

          style={{'maxHeight': '80vh'}}

          onClick={()=>handleClick('furniture')}
         
        />
     
    </Carousel.Item>


        <Carousel.Item>
        <img
          className="d-block w-100"
          src={holiday}
          style={{'maxHeight': '80vh'}}
          onClick={()=>handleClick('smartproducts')}
         
        />
        </Carousel.Item>
       

    
    </Carousel>
      
    );
};

export default CarouselItem;