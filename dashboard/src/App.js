import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Signup from "./components/signup"
import Footer from "./components/footer"
import Login from "./components/login"
import Contact from "./components/contact"
import Team from "./components/team"
import Dashboard from "./components/dashboard"

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;