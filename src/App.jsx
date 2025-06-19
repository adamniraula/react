import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Developers from './pages/Developers';
import Community from './pages/Community';
import Support from './pages/Support';
import About from './pages/About';
import ContactForm from './components/ContactForm';
import ProductDetail from './pages/ProductDetail';
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/community" element={<Community />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}