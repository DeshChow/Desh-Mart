import React from 'react';
import './ReviewShowInner.css';
import reviewuser from '../../images/reviewuser.jpg';

const ReviewShowInner = (props) => {

  const { name, review, reviewDate } = props.rv;

  const { day, month, year } = reviewDate;



  const revDate=month+'/'+day+'/'+year;

  const date1 = new Date(revDate);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))-1;

  

  
  console.log(diffDays + " days",revDate);

  const GetDateInfo=()=>{

          if(diffDays<=0)return 'Today';

          else if(diffDays==1)return 'Yesterday';

          else return `${diffDays} days ago`;
  }

  return (

      <div class="cardi">
        <div class="cardi-image"><img src={reviewuser} style={{width: '100%', height: '100%', borderRadius: '18px'}}></img></div>
        <div class="cardi-text">
          <span class="date">{GetDateInfo()}</span>
          <h2>{name}</h2>
          <p>{review}</p>
        </div>
        <div class="cardi-stats">
          <div class="stat">
            <div class="value">{day}</div>
            <div class="type">day</div>
          </div>
          <div class="stat border">
            <div class="value">{month}</div>
            <div class="type">month</div>
          </div>
          <div class="stat">
            <div class="value">{year}</div>
            <div class="type">year</div>
          </div>
        </div>
      </div>

  );
};

export default ReviewShowInner;