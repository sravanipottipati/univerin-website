import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import RefundPolicy from './RefundPolicy';
import ContactUs from './ContactUs';
import logo from './app-logo-full.png';
import screenshot from './app-screenshot.png';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-icon">🚀</div>
            <h2>Launching Soon!</h2>
            <p>Univerin is coming to Google Play Store very soon.</p>
            <p className="modal-sub">Be the first to know when we launch in your town!</p>
            <div className="modal-location">📍 Starting in Railway Kodur, Andhra Pradesh</div>
            <button className="modal-btn" onClick={() => setShowModal(false)}>Got it!</button>
          </div>
        </div>
      )}
      <nav className={scrolled ? 'nav scrolled' : 'nav'}>
        <a href="/#" className="nav-logo">
          <img src={logo} alt="Univerin" height="40" />
        </a>

      </nav>

      <section className="hero">
        <div className="hero-left">
          <h1>Everything from your nearby shops, delivered to your home</h1>
          <p className="hero-sub">Groceries, food and more - all in one app</p>
          <a href="#download" className="btn-dl" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>&#11015; Download App</a>
        </div>
        <div className="hero-right">
          <div className="phone-frame">
            <img src={screenshot} alt="Univerin App" className="phone-img" />
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="stat">
          <div className="stat-num blue">0</div>
          <div className="stat-title">Local Shops Onboarded</div>
          <div className="stat-sub">Growing every day</div>
        </div>
        <div className="stat">
          <div className="stat-num orange">0</div>
          <div className="stat-title">Active Users</div>
          <div className="stat-sub">Trusting Univerin daily</div>
        </div>
        <div className="stat">
          <div className="stat-num blue">0</div>
          <div className="stat-title">Orders Delivered</div>
          <div className="stat-sub">This month alone</div>
        </div>
      </div>

      <section className="what">
        <h2>What can you order?</h2>
        <p className="sec-sub">Everything your city offers, now at your fingertips</p>
        <div className="what-cards">
          <div className="wcard green">
            <div className="wcard-icon">🛒</div>
            <h3>Fresh Groceries</h3>
            <p>Vegetables, fruits, dairy, bread, spices, oils and more</p>
            <a href="#download" className="wcard-btn">Browse Everything →</a>
          </div>
          <div className="wcard orange-card">
            <div className="wcard-icon">🍽️</div>
            <h3>Food</h3>
            <p>Biryani, curries, North Indian, Chinese and more</p>
            <a href="#download" className="wcard-btn">Browse Everything →</a>
          </div>
        </div>
      </section>

      <section className="how">
        <h2>How it works</h2>
        <div className="how-steps">
          <div className="how-step">
            <div className="how-icon blue-ic">📍</div>
            <div className="how-title">Choose Nearby Shop</div>
            <div className="how-desc">Find trusted shops in your area</div>
          </div>
          <div className="how-arr">›</div>
          <div className="how-step">
            <div className="how-icon orange-ic">🛒</div>
            <div className="how-title">Place Order</div>
            <div className="how-desc">Add items and confirm easily</div>
          </div>
          <div className="how-arr">›</div>
          <div className="how-step">
            <div className="how-icon purple-ic">📦</div>
            <div className="how-title">Get Delivery</div>
            <div className="how-desc">Fast delivery to your doorstep</div>
          </div>
        </div>
      </section>

      <section className="download" id="download">
        <h2>Download the Univerin App</h2>
        <p>Your city. Your shops. One app.</p>
        <div className="store-btns">
          <a href="/#" className="store-btn" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>
            <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
              <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
            </svg>
            <div>
              <div className="store-small">Get it on</div>
              <div className="store-big">Google Play</div>
            </div>
          </a>
          <a href="/#" className="store-btn" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>
            <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div>
              <div className="store-small">Download on the</div>
              <div className="store-big">App Store</div>
            </div>
          </a>
        </div>
      </section>

      <footer className="footer-new">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <a href="/#" className="footer-logo">
              <img src={logo} alt="Univerin" height="34" />
            </a>
            <p className="footer-desc">Your city's hyperlocal delivery platform. Order from local shops near you.</p>
            <p className="footer-desc">We are a technology facilitator — not a direct seller of goods.</p>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Legal</h4>
            <a href="/privacy-policy" className="footer-col-link">Privacy Policy</a>
            <a href="/terms-and-conditions" className="footer-col-link">Terms &amp; Conditions</a>
            <a href="/refund-policy" className="footer-col-link">Refund Policy</a>
            <a href="/contact-us" className="footer-col-link">Cancellation Policy</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <a href="/contact-us" className="footer-col-link">About Us</a>
            <a href="mailto:contact@univerin.in" className="footer-col-link">contact@univerin.in</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Univerin Private Limited. All rights reserved.</span>
          <span>Made in India &nbsp;🇮🇳</span>
        </div>
      </footer>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
