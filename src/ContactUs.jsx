import React from 'react';
import forestImage from "./assets/forest.jpeg"
import peopleImage from "./assets/people.png"

export function ContactUs() {
    return (
        <div style={{fontFamily: "sans-serif"}}>
            <section 
                className="text-center text-white d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: "url(${forestImage})",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "55vh"
                }}>
                <div className="container py-4 rounded bg-dark bg-opacity-50">
                    <h1 className="fw-semibold fs-1 mb-2">Contact Us!</h1>
                    <p className="fs-5 text-light mb-0">We would love to hear from you.</p>
                </div>
            </section>
            <section className="intro" style={{ padding: "60px"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7 mb-4 mb-md-0">
                        <h5 className="fw-semibold">Our Team</h5>
                        <p>
                            <strong>Jacob Frans</strong>: Junior in Informatics with a concentration in Data Science. Email: jfrans@uw.edu
                        </p>
                        <p>
                            <strong>Shreya Madhavan</strong>: Sophomore in Informatics with a concentration in Human Computer Interaction. Minoring in Business. Email: shreym47@uw.edu
                        </p>
                        <p>
                            <strong>Anmol Gill</strong>: Sophomore intending to major in Informatics. Email: anmol324@uw.edu
                        </p>
                        <p>
                            <strong>Roman Nekrasov</strong>: Senior in Informatics. Email: nekrasov@uw.edu
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img src={peopleImage} alt="Our Team" className="img-fluid rounded" />
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}