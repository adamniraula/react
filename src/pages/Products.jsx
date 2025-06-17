import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const productData = [
    {
      image: "/images/5060.png",
      name: "GeForce RTX 5060",
      description: "The GeForce RTX 5060 delivers 12 TFLOPs of FP32 compute for exceptional 1440p gaming...",
      price: "$349 USD",
      link: "/products/5060"
    },
    {
      image: "/images/5070ti.png",
      name: "GeForce RTX 4070 Ti",
      description: "Built on Ada Lovelace, the RTX 4070 Ti features 7680 CUDA cores...",
      price: "$799 USD",
      link: "/products/4070ti"
    },
    {
      image: "/images/a4500.png",
      name: "NVIDIA RTX A4500",
      description: "A workstation‐class GPU with 7168 CUDA cores, 20 GB GDDR6...",
      price: "$2399 USD",
      link: "/products/A4500"
    }
  ];

  return (
    <div className="container">
      <h2 className="section-title">Our Products</h2>
      <section className="products-grid">
        {productData.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </section>
    </div>
  );
}
