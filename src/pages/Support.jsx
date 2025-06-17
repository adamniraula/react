import React from 'react';

export default function Support() {
  return (
    <div className="container">
      <section className="support-banner">
        <h2>How can we help?</h2>
        <input type="text" placeholder="Search FAQs, drivers, tutorials..." />
      </section>
      <section className="support-cards">
        <div className="card">
          <img src="/images/driver.png" alt="Driver Installation" />
          <p>
            <strong>Getting Started with GeForce RTX Drivers</strong><br />
            Step-by-step guide to download and install the latest drivers on Windows & Linux.
          </p>
        </div>
        <div className="card">
          <img src="/images/cuda.png" alt="CUDA Toolkit" />
          <p>
            <strong>Installing CUDA Toolkit on Ubuntu 22.04</strong><br />
            Detailed instructions for setting up CUDA 12.0 and cuDNN for GPU dev.
          </p>
        </div>
        <div className="card">
          <img src="/images/g-sync.png" alt="G-Sync Troubleshooting" />
          <p>
            <strong>Troubleshooting G-Sync Flicker</strong><br />
            Common fixes for screen flickering when enabling G-Sync on NVIDIA monitors.
          </p>
        </div>
      </section>
    </div>
  );
}
