import React, { useState } from "react";
import placeholderImg from "./img/placeHolder.jpg"; // adjust the path as needed
import './index.css';

// Style broke - still need to dynamically add filtering
export function Shop() {
  const products = [
    { id: 1, name: "Linen Shirt", company: "EcoWear", price: "$45" },
    { id: 2, name: "Cotton Hoodie", company: "GreenThread", price: "$60" },
    { id: 3, name: "Denim Jacket", company: "BlueLeaf", price: "$85" },
    { id: 4, name: "Nylon Shorts", company: "NatureFit", price: "$35" },
    { id: 5, name: "Silk Blouse", company: "Urban Organics", price: "$75" },
    { id: 6, name: "Polyester Pants", company: "EcoStyle", price: "$50" },
    { id: 7, name: "Bamboo Tee", company: "EarthWear", price: "$40" },
    { id: 8, name: "Cotton Jeans", company: "Leaf & Loom", price: "$70" },
    { id: 9, name: "Recycled Fleece", company: "UpCycle Co.", price: "$55" },
  ];

  function renderProductGrid() {
    return products.map((p) => (
      <div key={p.id} className="col mb-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={placeholderImg} className="card-img-top" alt={p.name} />
          <div className="card-body p-2">
            <h2 className="h5">{p.name}</h2>
            <p className="mb-0">{p.company}</p>
            <p>{p.price}</p>
            <button className="saveBtn" style={{ width: "50%" }}>Save</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
        <main className="d-flex flex-column flex-md-row justify-content-between m-3">
            <div className="firstColumn flex-grow-1 flex-column flex-wrap col-12 col-md-3">
                <input type="text" id="searchProducts" placeholder="Search.." className="form-control mb-2" />
                <button type="submit" className="btn btn-primary mb-3">
                Submit
                </button>

                <section className="filterSection my-3 p-3 border rounded">
                    <h2>Filter Products</h2>

                    <div className="fabricComposition">
                        <h3>Fabric Composition</h3>

                        {["Cotton", "Polyester", "Nylon"].map((fabric, i) => (
                        <div key={i} className="form-check">
                            <input className="form-check-input" type="checkbox" id={`fabric-${i}`} />
                            <label className="form-check-label" htmlFor={`fabric-${i}`}>
                            {fabric}
                            </label>
                        </div>
                        ))}
                    </div>

                    <div className="ratingSection mt-3">
                        <h3>Rating</h3>
                        <input type="range" className="form-range" min="0" max="5" id="customRange" />
                    </div>

                    <div className="sortBySection flex-column mt-3">
                        <h3>Sort By</h3>
                        <button className="btn btn-outline-secondary me-2 mb-2">Lowest Price</button>
                        <button className="btn btn-outline-secondary me-2 mb-2">Closest Distance</button>
                        <button className="btn btn-outline-secondary mb-2">Alphabetical Order</button>
                    </div>
                </section>

                <div className="sustainabilityCalculator p-3 border rounded">
                <h4>Sustainability Calculator</h4>
                <p id="sustainabilityCalcNum">$0</p>
                </div>
            </div>

            <div className="gridView d-flex justify-content-evenly flex-wrap mx-1 col-12 col-sm-9">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {renderProductGrid()}
                </div>  
            </div>
            
        </main> 
    </>
  );
}
