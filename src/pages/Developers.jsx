import React from 'react';

export default function Developers() {
  return (
    <div className="container">
      <h2 className="section-title">Meet the Team</h2>
      <section className="developers-grid">
        <div className="profiles">
          <div className="profile-item">
            <img src="/images/jane.png" alt="Jane Doe" />
            <div className="profile-text">
              <h3>Jane Doe</h3>
              <p>
                Lead Graphics Engineer with 8 years at NVIDIA, specializing in real‐time ray tracing...
              </p>
            </div>
          </div>
          <div className="profile-item">
            <img src="/images/shane.png" alt="Carlos Nguyen" />
            <div className="profile-text">
              <h3>Carlos Nguyen</h3>
              <p>Senior AI Architect focused on GPU‐accelerated deep learning pipelines...</p>
            </div>
          </div>
          <div className="profile-item">
            <img src="/images/priya.png" alt="Priya Shah" />
            <div className="profile-text">
              <h3>Priya Shah</h3>
              <p>Developer Advocate building tutorials, sample code, and community repos...</p>
            </div>
          </div>
        </div>
        <div className="main-image">
          <img src="/images/team.png" alt="NVIDIA Pulse Development Team" />
        </div>
      </section>
    </div>
  );
}
