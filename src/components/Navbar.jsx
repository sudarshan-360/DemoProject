import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">
        {/* Left Side: Logo and Search */}
        <div className="d-flex align-items-center gap-3 flex-grow-1">
          <Link className="navbar-brand p-0" to="/">
            <div
              className="d-flex align-items-center justify-content-center rounded"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#7126B5",
                color: "white",
              }}
            >
              <span className="fw-bold">h</span>
            </div>
          </Link>

          <div
            className="d-none d-lg-flex input-group"
            style={{ maxWidth: "400px" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Search here..."
              style={{ borderRadius: "8px 0 0 8px" }}
            />
            <button
              className="btn"
              type="button"
              style={{
                backgroundColor: "#7126B5",
                color: "white",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        {/* Right Side: Navigation Items */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          {/* Separate Magnifying Glass Icon */}
          <button
            className="btn btn-link text-decoration-none text-dark p-0"
            style={{ border: "none", background: "none" }}
          >
            <i
              className="bi bi-search"
              style={{ color: "#7126B5", fontSize: "1.2rem" }}
            ></i>
          </button>

          {/* Explore Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-link text-decoration-none text-dark d-flex align-items-center gap-1 p-0"
              type="button"
              data-bs-toggle="dropdown"
              style={{ border: "none", background: "none" }}
            >
              <span>Explore</span>
              <i
                className="bi bi-chevron-down"
                style={{ fontSize: "0.75rem" }}
              ></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  People - Community
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Places - Venues
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Programs - Events
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Products - Store
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Star Icon */}
          <button
            className="btn btn-link text-decoration-none text-dark p-0"
            style={{ border: "none", background: "none" }}
          >
            <i
              className="bi bi-star"
              style={{ color: "#7126B5", fontSize: "1.2rem" }}
            ></i>
          </button>

          {/* Hobbies Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-link text-decoration-none text-dark d-flex align-items-center gap-1 p-0"
              type="button"
              data-bs-toggle="dropdown"
              style={{ border: "none", background: "none" }}
            >
              <span>Hobbies</span>
              <i
                className="bi bi-chevron-down"
                style={{ fontSize: "0.75rem" }}
              ></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  All Hobbies
                </a>
              </li>
            </ul>
          </div>

          {/* Bookmark Icon */}
          <button
            className="btn btn-link text-decoration-none text-dark p-0"
            style={{ border: "none", background: "none" }}
          >
            <i
              className="bi bi-bookmark"
              style={{ color: "#7126B5", fontSize: "1.2rem" }}
            ></i>
          </button>

          {/* Bell Icon */}
          <button
            className="btn btn-link text-decoration-none text-dark p-0"
            style={{ border: "none", background: "none" }}
          >
            <i
              className="bi bi-bell"
              style={{ color: "#7126B5", fontSize: "1.2rem" }}
            ></i>
          </button>

          {/* Cart Icon */}
          <button
            className="btn btn-link text-decoration-none text-dark p-0"
            style={{ border: "none", background: "none" }}
          >
            <i
              className="bi bi-cart"
              style={{ color: "#7126B5", fontSize: "1.2rem" }}
            ></i>
          </button>

          {/* Profile Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-link text-decoration-none text-dark d-flex align-items-center gap-1 p-0"
              type="button"
              data-bs-toggle="dropdown"
              style={{ border: "none", background: "none" }}
            >
              <img
                src="https://i.pravatar.cc/40?img=12"
                alt="Profile"
                className="rounded-circle"
                width="40"
                height="40"
                style={{ objectFit: "cover" }}
              />
              <i
                className="bi bi-chevron-down"
                style={{ fontSize: "0.75rem" }}
              ></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="d-flex align-items-center gap-2">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMobile"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="collapse navbar-collapse d-lg-none" id="navbarMobile">
          <div className="mt-3">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search here..."
              />
              <button
                className="btn"
                type="button"
                style={{ backgroundColor: "#7126B5", color: "white" }}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Explore</span>
              <i className="bi bi-chevron-right"></i>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Hobbies</span>
              <i className="bi bi-chevron-right"></i>
            </div>
            <Link
              to="/signin"
              className="btn w-100 mt-3"
              style={{
                backgroundColor: "#7126B5",
                color: "white",
              }}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
