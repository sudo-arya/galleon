// import logo from './logo.svg';

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Ethics from "./Components/Ethics";
import Careers from "./Components/Careers";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Seo from "./Components/Seo";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="cs-5">
        <Navbar />
        <Seo title="Home - Galleon Trading" description="" keywords="" />
        <div className="flex mx-auto mt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
