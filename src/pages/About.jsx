import React from 'react';

export default function About() {
  return (
    <>
      <main>
        <div className="about-hero container">
          <div className="rotated-label">ABOUT US</div>
          <div className="hero-image">
            <img src="/images/collab.png" alt="Illustration of collaboration" />
          </div>
          <div className="rotated-label">ABOUT US</div>
        </div>
        <div className="about-text-content container">
          <p>
            NVIDIA Pulse was founded in 2018 to bring together graphics engineers, game developers,
            and AI researchers under one roof...
          </p>
          <p>
            Over the years, we’ve grown into a thriving global community of over 25,000 members...
          </p>
          <p>
            Today, NVIDIA Pulse is not just a website—it’s an ecosystem. We partner with conferences,
            run student hackathons, and preview next-gen GPU tech...
          </p>
        </div>
      </main>
    </>
  );
}
