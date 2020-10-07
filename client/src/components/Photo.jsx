import React from 'react';
import classes from '../style/Photo.module.css';

const Photo = (props) => {
  return (
      <li onClick={props.toggleModal} className={classes.listWidth}>
        <img className={classes.picWidth} src={props.photo} />
      </li>

  );
};

export default Photo;