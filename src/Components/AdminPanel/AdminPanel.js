import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import insertpic from '../../images/insert.jpg'
import deletepic from '../../images/delete.jpg'
import updatepic from '../../images/update.jpg'
import pendingorder from '../../images/pendingorder.jpg'
import review from '../../images/review.jpg'
import orderhistory from '../../images/orderhistory.jpg'

import './AdminPanel.css'
import { getUserInfo } from '../../Utilities/SessionData';
import swal from 'sweetalert';

const AdminPanel = () => {


    let history = useHistory();


    const handleClick = (str) => {
        history.push('/' + str);
    }


    if(getUserInfo().email!='outoftheboxdesh@gmail.com')
    {
        history.push('/home');

        swal("Only Admin Access!");
    }


    return (

     
        <div className="cen">

            <div className="deck">
                <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Img style={{ cursor: 'pointer' }} variant="top" src={insertpic} onClick={() => handleClick('AdminInsertItem')} />

                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Img style={{ cursor: 'pointer' }} variant="top" src={deletepic} onClick={() => handleClick('AdminDeleteItem')} />

                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Img style={{ cursor: 'pointer' }} variant="top" src={updatepic} onClick={() => handleClick('AdminUpdateItem')} />

                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>

            <div className="deck">
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Img style={{ cursor: 'pointer' }} variant="top" src={pendingorder} onClick={() => handleClick('AdminPendingOrder')} />

                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Img style={{ cursor: 'pointer' }} variant="top" src={orderhistory} onClick={() => handleClick('AdminOrderHistory')} />

                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Img style={{ cursor: 'pointer' }} variant="top" src={review} onClick={() => handleClick('AdminPendingReview')} />

                    </Card.Body>
                </Card>
            </CardDeck>

            </div>

           

        </div>
    );
};

export default AdminPanel;