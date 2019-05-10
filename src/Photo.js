import React from 'react';

const Photo = (props) => {
  return (
      <div>
        <img key={props.id} className="profile img-fluid" alt="profile" src={props.image}/>
        <h5 className="profile-name">{props.name}</h5>
        <h6 className="profile-title">{props.title}</h6>
      </div>

  )
}

export default Photo;
