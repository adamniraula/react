import React from 'react';
import DeveloperCard from '../components/DeveloperCard'; 

export default function Developers() {
  const developers = [
    {
      name: "Jane Doe",
      role: "Lead Graphics Engineer with 8 years at NVIDIA, specializing in real‐time ray tracing...",
      image: "/images/jane.png"
    },
    {
      name: "Carlos Nguyen",
      role: "Senior AI Architect focused on GPU‐accelerated deep learning pipelines...",
      image: "/images/shane.png"
    },
    {
      name: "Priya Shah",
      role: "Developer Advocate building tutorials, sample code, and community repos...",
      image: "/images/priya.png"
    }
  ];

  return (
    <div className="container">
      <h2 className="section-title">Meet the Team</h2>
      <section className="developers-grid">
        <div className="profiles">
          {developers.map((dev, index) => (
            <DeveloperCard key={index} name={dev.name} role={dev.role} image={dev.image} />
          ))}
        </div>
        <div className="main-image">
          <img src="/images/team.png" alt="NVIDIA Pulse Development Team" />
        </div>
      </section>
    </div>
  );
}
