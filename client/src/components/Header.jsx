import React from 'react';
import classes from '../style/Header.module.css';

const Header = (props) => {
  console.log("props in header: ", props);

  return (
    <div className={classes.headerWidth}>
      <img className={classes.picWidth} src="https://hard-coded-components.s3.us-east-2.amazonaws.com/Screen+Shot+2020-09-29+at+4.08.26+PM.png" />
    </div>
  );
}

export default Header;