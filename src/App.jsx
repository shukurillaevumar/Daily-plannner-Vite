import "./App.css";
import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
import React from "react";
import TheNavbar from "./components/TheNavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <TheNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
