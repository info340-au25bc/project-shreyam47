import React, { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import placeholderImg from "./img/placeHolder.jpg";
import { AiFillSave } from "react-icons/ai";

export function ViewItem({ addToCloset }) {
  const [showDialog, setShowDialog] = useState(false);
  const location = useLocation();

  const item = location.state?.product;

  const handleSaveToCloset = () => {
    addToCloset(item);
    setShowDialog(true);
  }; 

  return (
    <main className="container mt-4">
      <div className="card mx-auto" style={{ width: "24rem" }}>
        <img src={item.image} className="card-img-top" alt={item.name} />

        <div className="card-body">
          <h2>{item.name}</h2>

          <p><strong>Company:</strong> {item.company}</p>
          <p><strong>Price:</strong> ${item.price}</p>
          <p><strong>Fabric:</strong> {item.fabric}</p>
          <p><strong>Rating:</strong> {item.rating}</p>
          <p><strong>Distance:</strong> {item.distance} miles</p>

          <button className= "m-1 border rounded" onClick={handleSaveToCloset}><AiFillSave /> Save to Closet</button>
        </div>
      </div>

      {showDialog && (
        <div style={{position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => setShowDialog(false)}>
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "0.5rem",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}>
            <p>
              Item added: Go view Your Closet!
            </p>
            <button onClick={() => setShowDialog(false)} style={{backgroundColor: "#626F47", borderRadius: "0.25rem"}}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
