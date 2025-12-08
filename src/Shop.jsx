import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import placeholderImg from "./img/placeHolder.jpg";
import './index.css';
import { Link } from "react-router-dom";
import { AiFillCar } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai"; 
import { AiFillEye } from "react-icons/ai";
import { AiOutlineFontColors } from "react-icons/ai";

export function Shop() {
  const [products, setProducts] = useState([]);
  
  const [selectedFabrics, setSelectedFabrics] = useState(new Set());
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const productsRef = ref(db, "products"); 

    const unregisterFunction = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productsArray = Object.keys(data).map(key => {
            return { ...data[key], firebaseKey: key }; 
        });
        setProducts(productsArray);
      } else {
        setProducts([]);
      }
    });
    return () => unregisterFunction();
  }, []);





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
    <div key={p.id} className="col-12 col-md-4 mb-4 d-flex justify-content-sm-center">
      <div className="card h-70" style={{width:"400px", height:"400px"}}>
        <img 
          src={p.image || placeholderImg} 
          className="card-img-top" 
          alt={p.name} 
          style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "cover" }} 
          onError={(e) => { e.target.src = placeholderImg; }} 
        />
        <div className="card-body p-2">
          <h2>{p.name}</h2>
          <p className="mb-0"><strong>Company: </strong>{p.company}</p>
          <p className="mb-0"><strong>Price: </strong>${p.price}</p>
          {/* <p className="mb-0"><strong>Fabric: </strong> {p.fabric}</p>
          <p className="mb-0"><strong>Rating: </strong>{p.rating}</p>
          <p className="mb-0"><strong>Distance: </strong>{p.distance} miles</p> */}
          <Link 
            to={`/view/${p.id}`} 
            state={{ product: p }}
          >
            <button className="border rounded" style={{ width: "50%" }}> <AiFillEye /> View</button>
          </Link>
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

              <button className="m-1 border rounded" onClick={() => handleSortChange("price")}> <AiFillDollarCircle /> Lowest Price</button>

              <button className="m-1 border rounded"  onClick={() => handleSortChange("distance")}><AiFillCar /> Closest Distance</button>

              <button className="m-1 border rounded"  onClick={() => handleSortChange("alphabetical")}> <AiOutlineFontColors /> Alphabetical Order</button>
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
