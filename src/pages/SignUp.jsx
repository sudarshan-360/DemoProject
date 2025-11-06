import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("joinin");

  return (
    <div className="bg-light py-5 min-vh-100">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100 py-5">
          <div className="col-12 col-lg-10">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                <h1 className="display-5 fw-bold mb-4">
                  Explore your <span style={{ color: "#4A90E2" }}>hobby</span>{" "}
                  or <span style={{ color: "#7126B5" }}>passion</span>
                </h1>
                <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
                  Sign-in to interact with a community of fellow hobbyists and
                  an eco-system of experts, teachers, suppliers, classes,
                  workshops, and places to practice, participate or perform.
                  Your hobby may be about visual or performing arts, sports,
                  games, gardening, model making, cooking, indoor or outdoor
                  activities...
                </p>
                <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
                  If you are an expert or a seller, you can Add your Listing and
                  promote yourself, your students, products, services or events.
                  Hop on your hobbyhorse and enjoy the ride.
                </p>
                <div className="d-flex gap-2 flex-wrap">
                  {[
                    "Singing",
                    "Fitness",
                    "Knitting",
                    "Gardening",
                    "Painting",
                    "Reading",
                  ].map((hobby, idx) => (
                    <div
                      key={idx}
                      className="d-flex align-items-center justify-content-center rounded"
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#f8f9fa",
                        border: "1px solid #dee2e6",
                      }}
                    >
                      <i
                        className="bi bi-person-circle"
                        style={{ fontSize: "32px" }}
                      ></i>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="bg-white rounded-4 shadow-lg p-4 p-md-5">
                  <div className="d-flex gap-4 mb-4">
                    <Link
                      to="/signin"
                      className={`btn btn-link text-decoration-none p-0 ${
                        activeTab === "signin"
                          ? "text-dark fw-bold"
                          : "text-muted"
                      }`}
                      style={{
                        borderBottom:
                          activeTab === "signin" ? "3px solid #7126B5" : "none",
                        borderRadius: 0,
                      }}
                    >
                      Sign In
                    </Link>
                    <button
                      className={`btn btn-link text-decoration-none p-0 ${
                        activeTab === "joinin"
                          ? "text-dark fw-bold"
                          : "text-muted"
                      }`}
                      onClick={() => setActiveTab("joinin")}
                      style={{
                        borderBottom:
                          activeTab === "joinin" ? "3px solid #7126B5" : "none",
                        borderRadius: 0,
                      }}
                    >
                      Join In
                    </button>
                  </div>

                  <div className="d-flex flex-column gap-3 mb-4">
                    <button
                      className="btn btn-outline-secondary btn-lg d-flex align-items-center justify-content-center gap-2"
                      style={{
                        borderColor: "#7126B5",
                        color: "#000",
                      }}
                    >
                      <i className="bi bi-google"></i>
                      Continue with Google
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-lg d-flex align-items-center justify-content-center gap-2"
                      style={{
                        borderColor: "#7126B5",
                        color: "#000",
                      }}
                    >
                      <i className="bi bi-facebook text-primary"></i>
                      Continue with Facebook
                    </button>
                  </div>

                  <div className="position-relative my-4">
                    <hr />
                    <span
                      className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Or connect with
                    </span>
                  </div>

                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <div className="input-group input-group-lg">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          id="password"
                          placeholder="Password"
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <i
                            className={`bi bi-eye${
                              showPassword ? "-slash" : ""
                            }`}
                          ></i>
                        </button>
                      </div>
                      <div className="d-flex align-items-center gap-2 mt-2">
                        <div className="d-flex gap-1">
                          <div
                            className="rounded"
                            style={{
                              width: "20px",
                              height: "4px",
                              backgroundColor: "#dee2e6",
                            }}
                          ></div>
                          <div
                            className="rounded"
                            style={{
                              width: "20px",
                              height: "4px",
                              backgroundColor: "#dee2e6",
                            }}
                          ></div>
                          <div
                            className="rounded"
                            style={{
                              width: "20px",
                              height: "4px",
                              backgroundColor: "#dee2e6",
                            }}
                          ></div>
                        </div>
                        <span className="text-muted small">
                          Password strength
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-muted small">
                        By continuing, you agree to our{" "}
                        <a href="#" style={{ color: "#7126B5" }}>
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" style={{ color: "#7126B5" }}>
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-lg w-100 mb-3"
                      style={{
                        backgroundColor: "#7126B5",
                        color: "white",
                      }}
                    >
                      Agree and Continue
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
