import React from 'react';

const SupportCard = ({ image, title, description }) => (
  <div className="support-card">
    {/* show the image */}
    <img src={image} alt={title} className="support-card__image" />

    {/* display the title */}
    <h3 className="support-card__title">{title}</h3>

    {/* display the description */}
    <p className="support-card__desc">{description}</p>
  </div>
);

export default SupportCard;