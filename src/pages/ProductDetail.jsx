import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="container">
      <section className="detail-content">
        <div className="detail-info">
          <h2>GeForce RTX {id.toUpperCase()}</h2>
          <p>
            The GeForce RTX {id.toUpperCase()} is built on NVIDIA’s Ada Lovelace architecture,
            featuring… (paste your full preview.html description here)
          </p>
          {/* include the full spec list from preview.html */}
        </div>
        <div className="detail-model">
          <img
            src={`/images/${id}big.png`}
            alt={`GeForce RTX ${id.toUpperCase()} Front View`}
          />
        </div>
      </section>
    </div>
  );
}
