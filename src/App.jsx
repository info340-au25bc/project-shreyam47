import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './Nav';
import {Index} from './Index';
import {Shop} from './Shop';
import {CompareItems} from './CompareItems';
import {YourCloset} from './YourCloset';
import {ContactUs} from './ContactUs';
import { LogIn } from './LogIn';
import './index.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/compare" element={<CompareItems />} />
        <Route path="/closet" element={<YourCloset />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
