import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import gift from '../../images/gift.jpg'
import holiday from '../../images/holiday.jpg'
import specialoffer from '../../images/specialoffer.jpg' 
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselItem = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={holiday}
            style={{'maxHeight': '60vh'}}
           
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gift}
            style={{'maxHeight': '60vh'}}
           
          />
      
       
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            
            src={specialoffer}

            style={{'maxHeight': '60vh'}}
           
          />
      
       
        </Carousel.Item>

      
      </Carousel>
    );
};

export default CarouselItem;