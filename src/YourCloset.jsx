import React, { useState } from 'react';
import placeholder from "./img/placeholder.jpg";
import "./YourCloset.css";



export function YourCloset({ closet, removeFromCloset  }) {
    return (
        <main className="saved-items container mt-4">
        <h1>Saved Items</h1>
        <div className="card-container d-flex flex-wrap">
            {closet.map((item) => (
                <div className="card closet-card" key={item.id}>
                    <img src={placeholder} alt="Clothes Image" />
                    <div className="card-body p-2">
                        <h2>{item.name}</h2>
                        <p className="mb-0"><strong>Company: </strong>{item.company}</p>
                        <p className="mb-0"><strong>Name: </strong>{item.company}</p>
                        <p className="mb-0"><strong>Price: </strong>${item.price}</p>
                        <p className="mb-0"><strong>Fabric: </strong> {item.fabric}</p>
                        <p className="mb-0"><strong>Rating: </strong>{item.rating}</p>
                        <p className="mb-0"><strong>Distance: </strong>{item.distance} miles</p>
                        <button className="removeBtn btn btn-outline-danger w-50" onClick={() => removeFromCloset(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
        </main>
    );
}