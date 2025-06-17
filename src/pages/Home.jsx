import React from 'react';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  const features = [
    {
      title: "News",
      text: "Stay up-to-date on the latest launches from NVIDIA—Ampere, Ada Lovelace, and beyond."
    },
    {
      title: "New Tech",
      text: "Deep dives into DLSS, real-time ray tracing, AI inference, and CUDA compute optimizations."
    },
    {
      title: "Workshops",
      text: "Hands-on tutorials and webinars covering driving least-latency ray tracing in Unreal Engine 5."
    },
    {
      title: "Architecture",
      text: "Inside look at how Ada Lovelace stacks up vs Ampere: SM count, RT cores, Tensor FP8, and power efficiency."
    }
  ];

  return (
    <div className="container">
      <section className="hero">
        <img
          src="/images/render.png"
          alt="Hero banner: real-time graphics showcase"
        />
        <div className="slider-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
      </section>

      <section className="features">
        {features.map((item, index) => (
          <FeatureCard key={index} title={item.title} text={item.text} />
        ))}
      </section>
    </div>
  );
}
