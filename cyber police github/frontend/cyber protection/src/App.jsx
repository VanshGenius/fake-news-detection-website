import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';
import CyberSecurityLanding from './components/CyberSecurityLanding';
import LoginPage from './components/LoginPage';
import DetailsForm from './components/DetailsForm';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FakeNewsDetector from './components/FakeNewsDetector';

function App() {
  return (
    <Router>

    <Routes>
      <Route path="/" element={<CyberSecurityLanding />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/details" element={<DetailsForm />} />
      <Route path="/fakedetection" element={<div className='fake-news-container'><FakeNewsDetector /></div>} />
    </Routes>
  </Router>
  );
}

export default App;