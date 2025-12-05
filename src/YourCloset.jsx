import React, { useState, useEffect } from 'react';
import placeholder from "./img/placeholder.jpg";
import "./index.css";
import { ref, onValue, remove } from 'firebase/database';
import { db } from "./firebase.js"



export function YourCloset() {
    const [closetItems, setClosetItems] = useState([]);

    useEffect(() => {
        const closetRef = ref(db, "closetItems");

        onValue(closetRef, (snapshot) => {
            const dataObj = snapshot.val();
            let itemsArray = [];
            if (!dataObj) {
                setClosetItems([]);
            } else {
                const keyArray = Object.keys(dataObj);
                const newArray = keyArray.map((keyString => {
                    const transformed = dataObj[keyString];
                    return { id: keyString, ...transformed };
                }));
                setClosetItems(newArray);
            }
        });
    }, []);

    function removeFromCloset(id) {
        const itemRef = ref(db, "closetItems", id);
        remove(itemRef);
    }

    return (
        <main className="saved-items container mt-4">
        <h1>Saved Items</h1>
        <div className="card-container d-flex flex-wrap">
            {closetItems.map((item) => (
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