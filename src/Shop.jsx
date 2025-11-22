import React, { useState } from "react";
import placeholderImg from "./img/placeHolder.jpg"; // adjust the path as needed
import './index.css';

export function Shop({ addToCloset }) {
  //array placeholder for firebase; work on adding pictures
  const products = [
    { id: 1, name: "Cotton Shirt", company: "EcoWear", price: "15", fabric: "Cotton", rating: 3, distance: "20"},
    { id: 2, name: "Nylon Shirt", company: "GreenWorld", price: "25", fabric: "Nylon", rating: 5, distance: "10"},
    { id: 3, name: "Polyester Shirt", company: "Suscanability", price: "10", fabric: "Polyester", rating: 4, distance: "50"}
  ];

  const [selectedFabrics, setSelectedFabrics] = useState(new Set());
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState(null);
  const [searchText, setSearchText] = useState("");

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

  if (sortBy === "price") {
    filteredProducts = [...filteredProducts].sort((x, y) => x.price - y.price);
  }

  if (sortBy === "distance") {
    filteredProducts = [...filteredProducts].sort((x, y) => x.distance - y.distance);
  }

  if (searchText !== "") {
    filteredProducts = filteredProducts.filter((p) => {
      const name = p.name.toLowerCase();
      const search = searchText.toLowerCase();
      return name.includes(search);
    });
  }

  if (sortBy === "alphabetical") {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) { 
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  function renderProductGrid() {
  return filteredProducts.map((p) => (
    <div key={p.id} className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card h-70">
        <img src={placeholderImg} className="card-img-top" alt={p.name} />
        <div className="card-body p-2">
          <h2>{p.name}</h2>
          <p className="mb-0"><strong>Company: </strong>{p.company}</p>
          <p className="mb-0"><strong>Price: </strong>${p.price}</p>
          <p className="mb-0"><strong>Fabric: </strong> {p.fabric}</p>
          <p className="mb-0"><strong>Rating: </strong>{p.rating}</p>
          <p className="mb-0"><strong>Distance: </strong>{p.distance} miles</p>
          <button className="border rounded" style={{ width: "50%" }} onClick={() => addToCloset(p)}>Save</button>
        </div>
      </div>
    </div>
  ));
}

  return (
    <>
      <main className="d-flex flex-column flex-md-row justify-content-between m-3">
        <div className="firstColumn flex-grow-1 flex-column flex-wrap col-12 col-md-3">
          <input
            type="text"
            id="searchProducts"
            placeholder="Search.."
            className="form-control mb-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {/* <button className = "m-1 border rounded" type="submit">Submit</button> */}

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

              <button className="m-1 border rounded" onClick={() => handleSortChange("price")}>Lowest Price</button>

              <button className="m-1 border rounded"  onClick={() => handleSortChange("distance")}>Closest Distance</button>

              <button className="m-1 border rounded"  onClick={() => handleSortChange("alpha")}>Alphabetical Order</button>
            </div>
          </section>

          <div className="sustainabilityCalculator p-3 border rounded">
            <h4>Sustainability Calculator</h4>
            <p id="sustainabilityCalcNum">$0</p>
          </div>
        </div>

        <div className="gridView d-flex justify-content-evenly flex-wrap mx-1 col-12 col-sm-9">
          <div className="row g-3">
            {renderProductGrid()}
          </div>  
        </div>
            
      </main> 
    </>
  );
}
