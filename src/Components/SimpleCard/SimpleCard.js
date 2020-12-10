
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './SimpleCard.css';
import { useHistory } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const SimpleCard = ({data}) => {
      

  const history=useHistory();


    const [userAction,setUserAction]= useContext(UserContext);

      const handleClick=()=>
      {
            const newUserAction={...userAction};

            newUserAction.showtopic=data.category;


            setUserAction(newUserAction);

            //console.log(userAction.showtopic);
            history.push('/Details/'+data.category);
      }
    return (

    <div className='sty'>
        <Card  style={{ width: '20rem' }}>
    <h4>{data.title}</h4>
      
        <Card.Img onClick={handleClick} style={{height : '20rem'}} variant="top" src={data.img} />
        <Card.Body>
          <a 
          onClick={handleClick} style={{color: '#68ABB7' , cursor :'pointer'}} variant="primary">see more</a>
        </Card.Body>
      </Card>

      </div>




    );
};

export default SimpleCard;