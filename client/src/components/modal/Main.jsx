import React from 'react';
import classes from './style/Main.module.css';
import SideBar from './SideBar';
import ChevronNext from './ChevronNext.jsx';
import ChevronPrev from './ChevronPrev.jsx';


const Main = (props) => {
  console.log('props in modal/Main: ', props.currentImage);
  return (
    <div className={classes.bgMain}>
      <div className={classes.modalWrapper}>
        <div className={classes.leftPanel}>
          <div className={classes.imageContainer}>
            <img
            className={classes.image}
            src={props.currentImage} />
          </div>
        <ChevronNext next={props.next}/>
        <ChevronPrev prev={props.prev}/>
        </div>
        <SideBar />
    </div>
    </div>
  )
}

export default Main;