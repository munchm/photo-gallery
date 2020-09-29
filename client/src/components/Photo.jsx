import React from 'react';

const Photo = (props) => {
  console.log("props in Photo.jsx: ",props);
  return (
    <li>
      <img src={props.photo} />
    </li>
  );

}

export default Photo;