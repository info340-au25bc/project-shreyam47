// // import React from 'react';
import React, { useState } from "react";
import placeholder from "./img/placeHolder.jpg";
import "./index.css";

function ItemCard({ item, isSelected, onClick }) {
    return (
        <div 
            className={`item-card ${isSelected ? "selected" : ""}`}
            onClick={() => onClick(item)}
        >
            <img src={placeholder} alt={item.name} className="item-img" />
            <h4 className="item-name">{item.name}</h4>
            <p className="item-company">{item.company}</p>
            <p className="item-price">${item.price}</p>
            <p className="item-fabric"><strong>Fabric: </strong>{item.fabric}</p>
            <p className="item-rating"><strong>Rating: </strong>{item.rating}</p>
            <p className="item-carbon"><strong>Carbon Emission: </strong>{item.carbon}</p>
        </div>
    );
}

export function CompareItems() {
    const [items, setItems] = useState([
        { id: 1, name: "Clothing Item 1", company: "Company A", price: "20", fabric: "Cotton", rating: 4, carbon: 120 },
        { id: 2, name: "Clothing Item 2", company: "Company B", price: "35", fabric: "Polyester", rating: 5, carbon: 90 },
        { id: 3, name: "Clothing Item 3", company: "Company C", price: "25", fabric: "Nylon", rating: 3, carbon: 150 },
        { id: 4, name: "Clothing Item 4", company: "Company D", price: "50", fabric: "Linen", rating: 4, carbon: 110 },
    ]);

    const [firstItem, setFirstItem] = useState(null);
    const [secondItem, setSecondItem] = useState(null);

    function handleSelect(item) {
        if (!firstItem) setFirstItem(item);
        else if (!secondItem && item.id !== firstItem.id) setSecondItem(item);
    }

    function clearSelection() {
        setFirstItem(null);
        setSecondItem(null);
    }

    return (
        <div className="compare-container">
            <h2>Compare Items</h2>

            <div className="item-grid">
                {items.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        isSelected={firstItem?.id === item.id || secondItem?.id === item.id}
                        onClick={handleSelect}
                    />
                ))}
            </div>

            {firstItem && secondItem && (
                <div className="comparison-section">
                    <h3>Comparison</h3>
                    <div className="comparison-grid">
                        <div className="comparison-card">
                            <img src={placeholder} alt={firstItem.name} className="comparison-img"/>
                            <h4>{firstItem.name}</h4>
                            <p>{firstItem.company}</p>
                            <p>${firstItem.price}</p>
                            <p><strong>Fabric: </strong>{firstItem.fabric}</p>
                            <p><strong>Rating: </strong>{firstItem.rating}</p>
                            <p><strong>Carbon Emission: </strong>{firstItem.carbon}</p>
                        </div>
                        <div className="comparison-card">
                            <img src={placeholder} alt={secondItem.name} className="comparison-img"/>
                            <h4>{secondItem.name}</h4>
                            <p>{secondItem.company}</p>
                            <p>${secondItem.price}</p>
                            <p><strong>Fabric: </strong>{secondItem.fabric}</p>
                            <p><strong>Rating: </strong>{secondItem.rating}</p>
                            <p><strong>Carbon Emission: </strong>{secondItem.carbon}</p>
                        </div>
                    </div>

                    <button className="clear-btn" onClick={clearSelection}>Clear Comparison</button>
                </div>
            )}
        </div>
    );
}
