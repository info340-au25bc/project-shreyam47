import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Nav } from './Nav';
import { Index } from './Index';
import { Shop } from './Shop';
import { CompareItems } from './CompareItems';
import { YourCloset } from './YourCloset';
import { ContactUs } from './ContactUs';
import { LogIn } from './LogIn';
import { ViewItem } from './ViewItem';
import { Footer } from './Footer';
import './index.css';
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  const [authLoaded, setAuthLoaded] = useState(false);
  const [closet, setCloset] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
      setAuthLoaded(true);
    });
    return unsubscribe;
  }, []);

  function addToCloset(item) {
    setCloset((prev) => [...prev, item]);
  }

  function removeFromCloset(id) {
    setCloset((prev) => prev.filter((item) => item.id !== id));
  }

  if (!authLoaded) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.5rem'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/shop"
          element={user ? <Shop user={user} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/compare"
          element={user ? <YourCloset user={user} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/closet"
          element={user ? <YourCloset user={user} /> : <Navigate to="/login" replace />}
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route 
          path="/login" 
          element={user ? <Navigate to="/" replace /> : <LogIn />} 
        />
        <Route 
          path="/view/:id" 
          element={<ViewItem addToCloset={addToCloset} />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;