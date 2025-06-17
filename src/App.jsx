import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header   from './components/Header';
import Footer   from './components/Footer';
import Home     from './pages/Home';
import Products from './pages/Products';
import Developers from './pages/Developers';
import Community  from './pages/Community';
import Support    from './pages/Support';
import About      from './pages/About';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/"          element={<Home/>} />
          <Route path="/products"  element={<Products/>}/>
          <Route path="/developers"element={<Developers/>}/>
          <Route path="/community" element={<Community/>}/>
          <Route path="/support"   element={<Support/>}/>
          <Route path="/about"     element={<About/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}