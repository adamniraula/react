import React from 'react';

const DeveloperCard = ({ name, role, image }) => (
  <div className="profile-item">
    <img src={image} alt={name} />
    <div className="profile-text">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  </div>
);

export default DeveloperCard;
