import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './SimpleCard.css';

const SimpleCard = ({data}) => {
    return (

    <div className='sty'>
        <Card style={{ width: '20rem' }}>
    <h4>{data.title}</h4>
      
        <Card.Img style={{height : '20rem'}} variant="top" src={data.img} />
        <Card.Body>
          <a style={{color: '#68ABB7'}} variant="primary">see more</a>
        </Card.Body>
      </Card>

      </div>




    );
};

export default SimpleCard;