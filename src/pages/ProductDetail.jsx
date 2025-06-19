import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError('');
      try {
        // console.log(`http://localhost:3001/api/products/${id}`);
        const res = await axios.get(`http://localhost:3001/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError('Product not found.');
      }
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading)
  {
    return <div className="container"><p>Loading...</p></div>;
  }
  if (error)
  {
    return <div className="container"><p className="error">{error}</p></div>;
  }
  if (!product)
  {
    return <div className="container"><p>No product found.</p></div>;
  }

  return (
    <div className="container">
      <section className="detail-content">
        <div className="detail-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <ul>
            <li><strong>Price:</strong> ${product.price}</li>
            <li><strong>Slug:</strong> {product.slug}</li>
          </ul>
          <button className="button" onClick={() => navigate(-1)}>Back</button>
        </div>
        <div className="detail-model">
          <img
            src={`http://localhost:3001${product.image}`}
            alt={product.name}
            style={{ maxWidth: 400, borderRadius: 16 }}
          />
        </div>
      </section>
    </div>
  );
}
