import React, { useState } from "react";
import placeholderImg from "./img/placeHolder.jpg"; // adjust the path as needed
import './index.css';

export function Shop() {
  //array placeholder for firebase; work on adding pictures
  const products = [
    { id: 1, name: "Cotton Shirt", company: "EcoWear", price: "$15", fabric: "Cotton", rating: 3, distance: "20"},
    { id: 2, name: "Nylon Shirt", company: "GreenWorld", price: "$25", fabric: "Nylon", rating: 5, distance: "10"},
    { id: 3, name: "Polyester Shirt", company: "Suscanability", price: "$10", fabric: "Polyester", rating: 4, distance: "50"}
  ];

  const [selectedFabrics, setSelectedFabrics] = useState(new Set());
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState(null);

  function handleFabricChange(fabric) {
    setSelectedFabrics((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(fabric)) {
        newSet.delete(fabric);
      } else {
        newSet.add(fabric);
      }
      return newSet;
    });
  }

  function handleRatingChange(event) {
    const value = Number(event.target.value);
    setMinRating(value);
  }

  function handleSortChange(criteria) {
    setSortBy(criteria);
  }

  let filteredProducts = products;

  if (selectedFabrics.size > 0) {
    filteredProducts = products.filter((p) => selectedFabrics.has(p.fabric));
  }

  if (minRating > 0) {
    filteredProducts = filteredProducts.filter((p) => p.rating >= minRating);
  }

  function renderProductGrid() {
    return filteredProducts.map((p) => (
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
            <button type="submit" /*className="btn btn-primary mb-3"*/>
              Submit
            </button>

          <section className="filterSection my-3 p-3 border rounded">
            <h2>Filter Products</h2>

            <div className="fabricComposition">
              <h3>Fabric Composition</h3>
                {["Cotton", "Polyester", "Nylon"].map((fabric) => (
                  <div key={fabric} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`fabric-${fabric}`}
                      checked={selectedFabrics.has(fabric)}
                      onChange={() => handleFabricChange(fabric)}
                    />
                    <label className="form-check-label" htmlFor={`fabric-${fabric}`}>
                      {fabric}
                    </label>
                    </div>
                ))}
            </div>

            <div className="ratingSection mt-3">
              <h3>Rating (1-5)</h3>
              <input
                type="range"
                className="form-range"
                min="0"
                max="5"
                step="1"
                value={minRating}
                onChange={handleRatingChange}
              />
            </div>

            <div className="sortBySection flex-column mt-3">
              <h3>Sort By</h3>
              <button>Lowest Price</button>
              <button>Closest Distance</button>
              <button /*className="btn btn-outline-secondary mb-2"*/>Alphabetical Order</button>
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
