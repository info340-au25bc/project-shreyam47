import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import placeholderImg from "./img/placeHolder.jpg";

export function ViewItem({ addToCloset }) {
  const location = useLocation();

  const item = location.state?.product;

  if (!item) {
    return <h2 className="text-center mt-5">Item not found.</h2>;
  }

  return (
    <main className="container mt-4">
      <div className="card mx-auto" style={{ width: "24rem" }}>
        <img src={placeholderImg} className="card-img-top" alt={item.name} />

        <div className="card-body">
          <h2>{item.name}</h2>

          <p><strong>Company:</strong> {item.company}</p>
          <p><strong>Price:</strong> ${item.price}</p>
          <p><strong>Fabric:</strong> {item.fabric}</p>
          <p><strong>Rating:</strong> {item.rating}</p>
          <p><strong>Distance:</strong> {item.distance} miles</p>

          <button className= "m-1 border rounded" onClick={() => addToCloset(item)}>Save to Closet</button>
        </div>
      </div>
    </main>
  );
}
