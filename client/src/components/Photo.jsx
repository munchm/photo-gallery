import React from 'react';
// import classes from '../style/Photo.module.css';

const Photo = (props) => {
  console.log("props in Photo.jsx: ",props);
  return (
    <li className={classes.listWidth} >
      <img className={classes.picWidth} src={props.photo} />
    </li>
  );

}

export default Photo;