import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import GroupPage from "./pages/GroupPage.jsx";
import SignIn from "./pages/Signin.jsx";
import Join from "./pages/Join.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-root min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<GroupPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
