// import React from 'react';
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import placeholderImg from "./img/placeHolder.jpg";
import { Link } from "react-router-dom"
import "./index.css";

function ItemCard({ item, isSelected, onClick }) {
    return (
        <div 
            className={`item-card ${isSelected ? "selected" : ""}`}
            onClick={() => onClick(item)}
        >
            <img 
                src={item.image || placeholderImg} 
                alt={item.name} 
                className="item-img" 
                onError={(e) => { e.target.src = placeholderImg; }}
            />
            <h4 className="item-name">{item.name}</h4>
            <p className="item-company">{item.company}</p>
        </div>
    );
}

export function CompareItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const productsRef = ref(db, "closetItems");

        const unregisterFunction = onValue(productsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const productsArray = Object.keys(data).map(key => {
                    return { ...data[key], id: key };
                });
                setItems(productsArray);
            } else {
                setItems([]);
            }
        });

        return () => unregisterFunction();
    }, []);


    const [firstItem, setFirstItem] = useState(null);
    const [secondItem, setSecondItem] = useState(null);

    function handleSelect(item) {
        if (!firstItem) {
            setFirstItem(item);
        } else if (!secondItem && item.id !== firstItem.id) {
            setSecondItem(item);
        } else if (firstItem && !secondItem && item.id === firstItem.id) {
            setFirstItem(null);
        }
    }

    function clearSelection() {
        setFirstItem(null);
        setSecondItem(null);
    }

    return (
        <div className="compare-container container mt-4">
            {items.length === 0 ? (
                <div className="alert alert-info text-center">
                    <p>Your closet is empty! Go to the shop to save items for comparison.</p>
                    <Link to="/shop" className="btn btn-primary">Go to Shop</Link>
                </div>
            ) : (
                <>
                    <p>Select two items from your closet to compare them side-by-side.</p>
                    <div className="item-grid d-flex flex-wrap gap-3 mb-4">
                        {items.map((item) => (
                            <ItemCard
                                key={item.id}
                                item={item}
                                isSelected={firstItem?.id === item.id || secondItem?.id === item.id}
                                onClick={handleSelect}
                            />
                        ))}
                    </div>
                </>
            )}

            {firstItem && secondItem && (
                <div className="comparison-section">
                    <h3>Comparison</h3>
                    <div className="comparison-grid">
                        <div className="comparison-card">
                            <img 
                                src={firstItem.image || placeholderImg} 
                                alt={firstItem.name} 
                                className="comparison-img img-fluid"
                                onError={(e) => { e.target.src = placeholderImg; }}
                            />
                            <h4>{firstItem.name}</h4>
                            <p>{firstItem.company}</p>
                            <p>${firstItem.price}</p>
                            <p><strong>Fabric: </strong>{firstItem.fabric}</p>
                            <p><strong>Rating: </strong>{firstItem.rating}</p>
                            <p><strong>Distance: </strong>{firstItem.distance} miles</p>
                        </div>
                        <div className="comparison-card">
                            <img 
                                src={secondItem.image || placeholderImg} 
                                alt={secondItem.name} 
                                className="comparison-img img-fluid"
                                onError={(e) => { e.target.src = placeholderImg; }}
                            />
                            <h4>{secondItem.name}</h4>
                            <p>{secondItem.company}</p>
                            <p>${secondItem.price}</p>
                            <p><strong>Fabric: </strong>{secondItem.fabric}</p>
                            <p><strong>Rating: </strong>{secondItem.rating}</p>
                            <p><strong>Distance: </strong>{secondItem.distance} miles</p>
                        </div>
                    </div>

                    <button className="clear-btn" onClick={clearSelection}>Clear Comparison</button>
                </div>
            )}
        </div>
    );
}
