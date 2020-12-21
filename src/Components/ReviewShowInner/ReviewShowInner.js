import React from 'react';
import './ReviewShowInner.css';

const ReviewShowInner = (props) => {

    const { name, review } = props.rv;

    return (

     <div className="reviewstyle">
    <div class="cardi">
      <div class="cardi-image"></div>
      <div class="cardi-text">
        <span class="date">4 days ago</span>
        <h2>Post One</h2>
        <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
      </div>
      <div class="cardi-stats">
        <div class="stat">
          <div class="value">4<sup>m</sup></div>
          <div class="type">read</div>
        </div>
        <div class="stat border">
          <div class="value">5123</div>
          <div class="type">views</div>
        </div>
        <div class="stat">
          <div class="value">32</div>
          <div class="type">comments</div>
        </div>
      </div>
    </div>
    <div class="cardi">
      <div class="cardi-image cardi2"></div>
      <div class="cardi-text cardi2">
        <span class="date">1 week ago</span>
        <h2>Post Two</h2>
        <p>Adipisicing elit. Ducimus, repudiandae corrupti amet temporibus omnis provident illum maxime quod. Lorem ipsum dolor</p>
      </div>
      <div class="cardi-stats cardi2">
        <div class="stat">
          <div class="value">7<sup>m</sup></div>
          <div class="type">read</div>
        </div>
        <div class="stat border">
          <div class="value">7152</div>
          <div class="type">views</div>
        </div>
        <div class="stat">
          <div class="value">21</div>
          <div class="type">comments</div>
        </div>
      </div>
    </div>
    <div class="cardi">
        <div class="cardi-image cardi3"></div>
        <div class="cardi-text cardi3">
          <span class="date">3 week ago</span>
          <h2>Post Three</h2>
          <p>Repudiandae corrupti amet temporibus omnis provident illum maxime. Ducimus, lorem ipsum dolor adipisicing elit</p>
        </div>
        <div class="cardi-stats cardi3">
          <div class="stat">
            <div class="value">5<sup>m</sup></div>
            <div class="type">read</div>
          </div>
          <div class="stat border">
            <div class="value">3021</div>
            <div class="type">views</div>
          </div>
          <div class="stat">
            <div class="value">15</div>
            <div class="type">comments</div>
          </div>
        </div>
      </div>
  </div>
      
    );
};

export default ReviewShowInner;