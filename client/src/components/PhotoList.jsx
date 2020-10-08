import React from 'react';
import Photo from './Photo.jsx';
import classes from '../style/App.module.css';

const PhotoList = (props) => {
  return (
    <ul className={classes.body} >
      {props.photos.map((photo, key) => {
        return <Photo setPic={props.setPic} toggleModal={props.toggleModal} key={key} photo={photo}/>
      })
      }
    </ul>
);

}

export default PhotoList;