import React from 'react';
import '../styles/FeatureCard.css';

export default function FeatureCard({ title, text }) {
  return (
    <div className="feature-card">
      <h3 className="feature-title">{title}</h3>
      <p className="feature-text">{text}</p>
    </div>
  );
}
