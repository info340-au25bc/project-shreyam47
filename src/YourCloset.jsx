import React, { useState } from 'react';
import placeholder from "./img/placeholder.jpg";



export function YourCloset() {
    const [items, setItems] = useState([
        { id: 1, name: "Clothing Item", company: "Company", price: "0.00"},
        { id: 2, name: "Clothing Item", company: "Company", price: "0.00"},
        { id: 3, name: "Clothing Item", company: "Company", price: "0.00"},
        { id: 4, name: "Clothing Item", company: "Company", price: "0.00"},
        { id: 5, name: "Clothing Item", company: "Company", price: "0.00"},
        { id: 6, name: "Clothing Item", company: "Company", price: "0.00"},
        { id: 7, name: "Clothing Item", company: "Company", price: "0.00"},
        { id: 8, name: "Clothing Item", company: "Company", price: "0.00"},
        { id: 9, name: "Clothing Item", company: "Company", price: "0.00"},
    ]);

    const handleRemove = (indexToRemove) => {
        const updatedItems = items.filter((item, i) => i !== indexToRemove);
        setItems(updatedItems);
    }
    return (
        <main className="saved-items container mt-4">
            <h1>Saved Items</h1>
            <div className="card-container d-flex flex-wrap">
                {items.map((item, index) => (
                    <div className="card" style={{width: "18rem"}} key={item.id}>
                        <img src={placeholder} alt="Clothes Image" />
                        <div className="card-body p-2">
                            <h2>{item.name}</h2>
                            <p>{item.company}</p>
                            <p>{item.price}</p>
                            <button className="removeBtn btn btn-outline-danger w-50"
                            onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}