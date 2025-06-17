import React from 'react';
import SupportCard from '../components/SupportCard';

export default function Support() {
  const supportTopics = [
    {
      image: "/images/driver.png",
      title: "Getting Started with GeForce RTX Drivers",
      description: "Step-by-step guide to download and install the latest drivers on Windows & Linux."
    },
    {
      image: "/images/cuda.png",
      title: "Installing CUDA Toolkit on Ubuntu 22.04",
      description: "Detailed instructions for setting up CUDA 12.0 and cuDNN for GPU dev."
    },
    {
      image: "/images/g-sync.png",
      title: "Troubleshooting G-Sync Flicker",
      description: "Common fixes for screen flickering when enabling G-Sync on NVIDIA monitors."
    }
  ];

  return (
    <div className="container">
      <section className="support-banner">
        <h2>How can we help?</h2>
        <input type="text" placeholder="Search FAQs, drivers, tutorials..." />
      </section>
      <section className="support-cards">
        {supportTopics.map((topic, index) => (
          <SupportCard
            key={index}
            image={topic.image}
            title={topic.title}
            description={topic.description}
          />
        ))}
      </section>
    </div>
  );
}
