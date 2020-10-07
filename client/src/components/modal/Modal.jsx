import React from 'react';
import Main from './Main.jsx';
import classes from './style/Modal.module.css';
import SideBar from './SideBar.jsx';

const Modal = (props) => {
  return (
    <div
    // onClick={props.toggleModal}
    className={classes.bgModal}>
      <Main currentImage={props.currentImage} next={props.next} prev={props.prev} data={props.data} />
    </div>
  )
}

export default Modal;