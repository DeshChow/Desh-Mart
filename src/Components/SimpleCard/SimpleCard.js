
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

    <div >
        <Card className='sty' style={{ width: '21rem' }}>
              <h4>{data.title}</h4>
      
              <Card.Img onClick={handleClick} style={{height : '20rem', cursor :'pointer'}} variant="top" src={data.img} />

              <br></br>
              
                 <a onClick={handleClick} style={{color: '#68ABB7' , cursor :'pointer'}} variant="primary">see more</a>
              
      </Card>

      </div>




    );
};

export default SimpleCard;