import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

export default function ProductCard({ image, name, description, price, link }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>Price: {price}</strong>
      <Link to={link} className="button">More Info</Link>
    </div>
  );
}
