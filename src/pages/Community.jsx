import React from 'react';

export default function Community() {
  return (
    <div className="container">
      <h2 className="section-title">Community & Events</h2>
      <section className="community-grid">
        <div className="community-image">
          <img src="/images/community.png" alt="Annual NVIDIA Pulse Hackathon" />
          <div className="caption">Annual NVIDIA Pulse Hackathon, 2024</div>
        </div>
        <div className="community-text">
          <p>
            NVIDIA Pulse is a thriving global community of over 25,000 members passionate about
            real‐time graphics, AI, and simulation...
          </p>
          <p>
            Join our Slack workspace to discuss optimization, share your CUDA projects, and more...
          </p>
        </div>
        <div className="community-cards">
          <div className="community-card">
            <img src="/images/meeting.png" alt="Monthly GPU Graphics Meetup" />
            <div className="caption">Monthly GPU Graphics Meetup (Online)</div>
          </div>
          <div className="community-card">
            <img src="/images/ai.png" alt="SIGGRAPH AI & Ray Tracing Workshop" />
            <div className="caption">SIGGRAPH AI & Ray Tracing Workshop</div>
          </div>
        </div>
      </section>
    </div>
  );
}
