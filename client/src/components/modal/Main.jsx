import React from 'react';
import classes from './style/Main.module.css';
import SideBar from './SideBar';
import ChevronNext from './ChevronNext.jsx';
import ChevronPrev from './ChevronPrev.jsx';


const Main = (props) => {
  const { currentImage, next, prev } = props;
  return (
    <div className={classes.bgMain}>
      <div className={classes.modalWrapper}>
        <div className={classes.leftPanel}>
          <div className={classes.imageContainer}>
            <img
              alt=""
              className={classes.image}
              src={currentImage}
            />
          </div>
          <ChevronNext next={next} />
          <ChevronPrev prev={prev} />
        </div>
        <SideBar />
      </div>
      <div className={classes.close}>
        <span onClick={props.toggleModal} className={classes.closeText}>
          Close
        </span>
        <i class="fas fa-times" />
      </div>
    </div>
  );
};

export default Main;
