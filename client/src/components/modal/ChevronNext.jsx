import React from 'react';
import classes from './style/Main.module.css';

const ChevronNext = (props) => (
  <div onClick={props.next} className={classes.right}>
    <i className="fas fa-angle-right" />
  </div>
);

export default ChevronNext;
