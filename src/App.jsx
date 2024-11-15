// import logo from './logo.svg';

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
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
import Seasme from "./Components/Seasme";
import Cotton from "./Components/Cotton";
import Rice from "./Components/Rice";
import CashewKernels from "./Components/CashewKernels";
import CashewShell from "./Components/CashewShell";
import Peanuts from "./Components/Peanuts";
import Pulses from "./Components/Pulses";
import Presence from "./Components/OurPresence";
import "./App.css"

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <Router>
      <div className="cs-">
        <Navbar />
        <Seo title="Home - Galleon Trading" description="" keywords="" />
        <ScrollToTop />
        <div className="flex mx-auto mt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/seasme" element={<Seasme />} />
            <Route path="/pulses" element={<Pulses />} />
            <Route path="/cashewShell" element={<CashewShell />} />
            <Route path="/peanuts" element={<Peanuts />} />
            <Route path="/cashewKernels" element={<CashewKernels />} />
            <Route path="/cotton" element={<Cotton />} />
            <Route path="/rice" element={<Rice />} />
            <Route path="/presence" element={<Presence />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
