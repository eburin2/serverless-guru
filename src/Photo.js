import React from 'react';

const Photo = (props) => {
  return (
    <div>
      <img className="profile" alt="profile" src={props.image}/>
    </div>
  )
}

export default Photo;
