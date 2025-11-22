import React from 'react';
import "./index.css";

export function LogIn() {
  return (
    <div id="signUpBody">
      <main id="signUpmain" className="container">
        <div className="col-12 col-md-5 bg-white p-4 rounded shadow">

          {/* Login Section */}
          <h2 className="text-center mb-3">Log In</h2>

          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control" placeholder="your@email.com" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="button" className="btn w-100 mt-2">Log In</button>
          </form>

          <hr className="my-4" />

          {/* Registration Section */}
          <h2 className="text-center mb-3">Register</h2>

          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input type="text" className="form-control" placeholder="John Doe" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control" placeholder="example@email.com" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input type="password" className="form-control" placeholder="Create password" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Confirm Password</label>
              <input type="password" className="form-control" placeholder="Re-enter password" />
            </div>

            <button type="button" className="btn w-100 mt-2">Register</button>
          </form>

        </div>
      </main>
    </div>
  );
}
