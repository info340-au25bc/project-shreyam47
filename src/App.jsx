import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './Nav';
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
import { db } from "./firebase";
import { ref, push } from "firebase/database";

function App() {
  const [user, setUser] = useState(null);
  const [authLoaded, setAuthLoaded] = useState(false);
  const [closetTotal, setClosetTotal] = useState(0);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
      setAuthLoaded(true);
    });
    return unsubscribe;
  }, []);

  function addToCloset(item) {
    const closetRef = ref(db, "closetItems");
    push(closetRef, {
      name: item.name,
      company: item.company,
      price: item.price,
      fabric: item.fabric,
      rating: item.rating,
      distance: item.distance,
      image: item.image
    });

    setClosetTotal((prev) => Number(prev) + Number(item.price));
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
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/shop"
          element={user ? <Shop user={user} closetTotal={closetTotal} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/compare"
          element={user ? <CompareItems user={user} /> : <Navigate to="/login" replace />}
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