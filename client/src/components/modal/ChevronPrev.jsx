import React from 'react';
import classes from './style/Main.module.css';

const ChevronPrev = (props) => (
  <div onClick={props.prev} className={classes.left}>
    <i className="fas fa-angle-left" />
  </div>
);

export default ChevronPrev;
