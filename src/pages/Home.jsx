import React from 'react';

export default function Home() {
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
        <div className="card">
          <h3>News</h3>
          <p>Stay up-to-date on the latest launches from NVIDIA—Ampere, Ada Lovelace, and beyond.</p>
        </div>
        <div className="card">
          <h3>New Tech</h3>
          <p>Deep dives into DLSS, real-time ray tracing, AI inference, and CUDA compute optimizations.</p>
        </div>
        <div className="card">
          <h3>Workshops</h3>
          <p>Hands-on tutorials and webinars covering driving least-latency ray tracing in Unreal Engine 5.</p>
        </div>
        <div className="card">
          <h3>Architecture</h3>
          <p>Inside look at how Ada Lovelace stacks up vs Ampere: SM count, RT cores, Tensor FP8, and power efficiency.</p>
        </div>
      </section>
    </div>
  );
}
