import React from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div className="container">
      <h2 className="section-title">Our Products</h2>
      <section className="products-grid">
        <div className="product-card">
          <img src="/images/5060.png" alt="GeForce RTX 5060" />
          <h3>GeForce RTX 5060</h3>
          <p>
            The GeForce RTX 5060 delivers 12 TFLOPs of FP32 compute for exceptional 1440p gaming,
            equipped with 3072 CUDA cores, 8 GB GDDR6, and full hardware‐accelerated ray tracing
            with DLSS 3.0 support.
          </p>
          <strong>Price: $349 USD</strong>
          <Link to="/products/5060" className="button">More Info</Link>
        </div>
        <div className="product-card">
          <img src="/images/5070ti.png" alt="GeForce RTX 4070 Ti" />
          <h3>GeForce RTX 4070 Ti</h3>
          <p>
            Built on Ada Lovelace, the RTX 4070 Ti features 7680 CUDA cores, 12 GB GDDR6X,
            and 90 RT cores—ideal for 4K gaming and creative workloads at an affordable price.
          </p>
          <strong>Price: $799 USD</strong>
          <Link to="/products/4070ti" className="button">More Info</Link>
        </div>
        <div className="product-card">
          <img src="/images/a4500.png" alt="NVIDIA RTX A4500" />
          <h3>NVIDIA RTX A4500</h3>
          <p>
            A workstation‐class GPU with 7168 CUDA cores, 20 GB GDDR6, and ECC memory,
            the RTX A4500 excels at AI inference, 3D rendering, and simulation workloads.
          </p>
          <strong>Price: $2399 USD</strong>
          <Link to="/products/A4500" className="button">More Info</Link>
        </div>
      </section>
    </div>
  );
}
