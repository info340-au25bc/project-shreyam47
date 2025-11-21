// import React from 'react';
import React, { useState } from "react";
import placeholder from "./img/placeHolder.jpg";

export function CompareItems() {

    const [items, setItems] = useState([
        { id: 1, name: "Clothing Item", company: "Company", price: "0.00" },
        { id: 2, name: "Clothing Item", company: "Company", price: "0.00" },
        { id: 3, name: "Clothing Item", company: "Company", price: "0.00" },
        { id: 4, name: "Clothing Item", company: "Company", price: "0.00" },
        { id: 5, name: "Clothing Item", company: "Company", price: "0.00" },
        { id: 6, name: "Clothing Item", company: "Company", price: "0.00" },
    ]);

    const [firstItem, setFirstItem] = useState(null);
    const [secondItem, setSecondItem] = useState(null);

    function handleSelect(item) {
        if (!firstItem) {
            setFirstItem(item);
        } else if (!secondItem && item.id !== firstItem.id) {
            setSecondItem(item);
        }
    }

    function clearSelection() {
        setFirstItem(null);
        setSecondItem(null);
    }

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>Compare Items</h2>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
                {items.map((item) => (
                    <div 
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        style={{ 
                            border: "1px solid #ccc", 
                            padding: "10px", 
                            width: "150px",
                            cursor: "pointer",
                            backgroundColor: 
                                firstItem?.id === item.id || secondItem?.id === item.id 
                                ? "#d3f1ff" 
                                : "white"
                        }}
                    >
                        <img src={placeholder} alt="item" style={{ width: "100%", borderRadius: "5px" }} />
                        <h4 style={{ margin: "10px 0 5px" }}>{item.name}</h4>
                        <p style={{ margin: 0 }}>{item.company}</p>
                        <p style={{ margin: 0 }}>${item.price}</p>
                    </div>
                ))}
            </div>

            {firstItem && secondItem && (
                <div style={{ marginTop: "40px" }}>
                    <h3>Comparison</h3>

                    <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "20px" }}>
                        <div style={{ textAlign: "center" }}>
                            <img src={placeholder} alt="item1" style={{ width: "150px", borderRadius: "5px" }} />
                            <h4>{firstItem.name}</h4>
                            <p>{firstItem.company}</p>
                            <p>${firstItem.price}</p>
                        </div>

                        <div style={{ textAlign: "center" }}>
                            <img src={placeholder} alt="item2" style={{ width: "150px", borderRadius: "5px" }} />
                            <h4>{secondItem.name}</h4>
                            <p>{secondItem.company}</p>
                            <p>${secondItem.price}</p>
                        </div>
                    </div>

                    <button 
                        onClick={clearSelection} 
                        style={{
                            marginTop: "30px",
                            padding: "10px 20px",
                            backgroundColor: "black",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                            borderRadius: "15px"
                        }}
                    >
                        Clear Comparison
                    </button>
                </div>
            )}
        </div>
    );
}