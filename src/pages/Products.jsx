import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [message, setMessage] = useState('');

  const API = `${process.env.REACT_APP_API_URL}/api/products`;

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API);
      setProducts(res.data);
      setError('');
    }
    catch (err)
    {
      setError('Failed to load products');
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openForm = (product = null) => {
    setEditProduct(product);
    setShowForm(true);
    setMessage('');
  };

  const closeForm = () => {
    setEditProduct(null);
    setShowForm(false);
    setMessage('');
  };

  const handleSave = async (data, file, isEdit = false, id = null) => {
    setLoading(true);
    setMessage('');
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => formData.append(key, data[key]));
      if (file) formData.append('image', file);

      if (isEdit && id) {
        await axios.put(`${API}/${id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        setMessage('Product updated!');
      } else {
        await axios.post(API, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        setMessage('Product added!');
      }
      await fetchProducts();
      closeForm();
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error saving product');

    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    setLoading(true);
    setMessage('');
    try {
      await axios.delete(`${API}/${id}`);
      setProducts(products => products.filter(p => p._id !== id));
      setMessage('Product deleted!');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error deleting product');
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h2 className="section-title">Our Products</h2>
      <button
        className="button"
        style={{ marginBottom: '1rem' }}
        onClick={() => openForm()}
      >Add Product</button>
      {message && <div className="status">{message}</div>}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <section className="products-grid">
          {products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            products.map(product => (
              <ProductCard
                id={product._id}
                image={`${process.env.REACT_APP_API_URL}${product.image}`}
                name={product.name}
                description={product.description}
                price={`$${product.price}`}
                link={`/products/${product.slug}`}
                onEdit={() => openForm(product)}
                onDelete={() => handleDelete(product._id)}
                showActions
              />
            ))
          )}
        </section>
      )}

      {showForm && (
        <ProductForm
          initial={editProduct}
          onSave={handleSave}
          onClose={closeForm}
        />
      )}
    </div>
  );
}
