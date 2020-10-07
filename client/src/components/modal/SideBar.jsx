import React from 'react';
import SideHeader from './SideHeader.jsx';
import classes from './style/SideBar.module.css';

const SideBar = (props) => {
  return (
    <div className={classes.container}>
      <SideHeader />
    </div>
  )
}

export default SideBar;