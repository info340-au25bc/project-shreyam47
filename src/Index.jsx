import React from 'react';
import './index.css';

export function Index() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('./img/valley.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "55vh",
        }}
      >
        <div className="container bg-dark bg-opacity-50 py-4 rounded">
          <h1 className="fw-semibold fs-1 mb-2">
            Sustainable Fashion for a Better Tomorrow
          </h1>
          <p className="fs-5 text-light mb-0">
            Discover, compare, and build your eco-friendly wardrobe with
            GreenThread.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-7 mb-4 mb-md-0">
              <h5 className="fw-semibold">About GreenThread</h5>

              <p>
                At <strong>GreenThread</strong>, we believe sustainability should
                be stylish, transparent, and accessible to everyone. Our mission
                is to make eco-friendly fashion simple, empowering you to find
                clothes made with care for the planet, the people who produce
                them, and the communities they touch.
              </p>

              <p>
                On our platform, you can{" "}
                <strong>browse thousands of sustainable brands</strong>,{" "}
                <strong>compare materials and ethical ratings</strong>, and even{" "}
                <strong>track your carbon footprint</strong> with every
                purchase. Our <em>“Your Closet”</em> feature lets you save
                favorite pieces, mix and match outfits, and build a personalized
                wardrobe that reflects both your style and values.
              </p>

              <p>
                Every brand we feature meets our sustainability criteria — from
                organic cotton and recycled fabrics to fair-trade manufacturing
                and carbon-neutral logistics. Together, we can reduce waste,
                promote ethical production, and make sustainability the new
                standard in fashion.
              </p>
            </div>

            {/* Image Section */}
            <div className="col-md-5">
              <img
                src="./img/sustainable_fashion.jpg"
                alt="Eco-friendly clothing made from sustainable materials"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
