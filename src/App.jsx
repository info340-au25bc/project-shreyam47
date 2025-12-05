import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './Nav';
import {Index} from './Index';
import {Shop} from './Shop';
import {CompareItems} from './CompareItems';
import {YourCloset} from './YourCloset';
import {ContactUs} from './ContactUs';
import { LogIn } from './LogIn';
import { ViewItem } from './ViewItem';
import { Footer } from './Footer';
import './index.css';

function App() {
  const [closet, setCloset] = useState([]);

  function addToCloset(item) {
    setCloset((prev) => [...prev, item]);
  }

  function removeFromCloset(id) {
    setCloset((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop addToCloset={addToCloset} />} />
          <Route path="/compare" element={<CompareItems />} />
          <Route path="/closet" element={<YourCloset closet={closet} removeFromCloset={removeFromCloset} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/view/:id" element={<ViewItem addToCloset={addToCloset} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
