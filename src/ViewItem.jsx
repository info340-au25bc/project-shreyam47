import React, { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { AiFillSave } from "react-icons/ai";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

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
      <div className="card mx-auto" style={{width:"400px", maxHeight:"750px"}}>
        <img src={item.image} className="card-img-top" alt={item.name} style={{width:"100%", maxHeight: "400px"}}/>

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
        <Alert show={showDialog} variant="success" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999, borderRadius: 0 }}>
          <Alert.Heading>Success!</Alert.Heading>
          <p>
            Item added: Go view Your Closet!
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShowDialog(false)} variant="outline-success">
              Close
            </Button>
          </div>
        </Alert>
      )}
    </main>
  );
}
