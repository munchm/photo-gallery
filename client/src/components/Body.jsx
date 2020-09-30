import React from 'react';
import classes from '../style/Body.module.css';

const Body = (props) => (
  <div className={classes.bodyWidth} >
    <img className={classes.picWidth} src="https://hard-coded-components.s3.us-east-2.amazonaws.com/Screen+Shot+2020-09-29+at+4.07.30+PM.png" />
  </div>
)

export default Body;