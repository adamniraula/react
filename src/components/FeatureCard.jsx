import React from 'react';
import '../styles/FeatureCard.css';

export default function FeatureCard({ title, text }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}