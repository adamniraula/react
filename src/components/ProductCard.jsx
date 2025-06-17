import React from 'react';
import '../styles/ProductCard.css';

export default function ProductCard({ image, title, description, price, link }) {
  return (
    <div className="product-card">
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>{price}</strong>
      <a href={link} className="button">Learn More</a>
    </div>
  );
}
