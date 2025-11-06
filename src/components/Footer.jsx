import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light border-top py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-muted small mb-0">
              © 2025 hobbycue. All rights reserved.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="text-muted text-decoration-none small">
                Privacy Policy
              </a>
              <a href="#" className="text-muted text-decoration-none small">
                Terms of Service
              </a>
              <a href="#" className="text-muted text-decoration-none small">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


