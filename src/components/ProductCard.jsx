import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

export default function ProductCard({
  id,
  image,
  name,
  description,
  price,
  link,
  onEdit,
  onDelete,
  showActions
}) {
  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        style={{
          width: "160px",
          height: "160px",
          objectFit: "cover",
          borderRadius: "8px",
          display: "block",
          margin: "0 auto"
          }}
        />
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>Price: {price}</strong>
      <Link to={`/products/${id}`} className="button">More Info</Link>
      {showActions && (
        <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
          <button className="button" onClick={onEdit}>Edit</button>
          <button className="button" style={{ background: '#eee', color: '#222' }} onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}
