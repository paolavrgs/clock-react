import React from 'react';
import './index.css';

const ClockUI = (props) => {
  return (
    <div className="box-time bg">
      <h1>
        I love you more every second&nbsp;
        <i className="fa fa-heart"></i>
      </h1>
      <span>{ props.time }</span>
    </div>
  );
}

export default ClockUI;