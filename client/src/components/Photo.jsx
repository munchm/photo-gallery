import React from 'react';

const Photo = (props) => {
  console.log(props);
  return (
    <li>
      <img src={props.photo.currerntImage} />
    </li>
  );

}

export default Photo;