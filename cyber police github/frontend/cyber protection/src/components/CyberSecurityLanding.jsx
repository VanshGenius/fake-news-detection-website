import React from "react";
import cybersvg from '../assets/cyber.svg';
import cyber2svg from '../assets/cyber2.jpg';
import cyber3svg from '../assets/cyber3.png';
import cyber4svg from '../assets/cyber4.jpg';
import './CyberSecurityLanding.css'


export default function CyberSecurityLanding() {
  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="logo">CyberEz</h1>
        <div className="nav-links">
          <a href="/" className="active">Home</a>
          <a href="#services">Services</a>
          <a href="/details">Contact us</a>
          <a href="/login">Login</a>
        </div>
      </nav>

      <div className="content large-content">
        <div className="text-section">
          <h2 className="title">Empowering You in the Digital Age</h2>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis.</p>
          <button className="purchase-button"><a href="/fakedetection">Detect Fake</a></button>
        </div>
        
        <div className="image-section">
          <img src={cybersvg} alt="Cyber Security Shield" className="cyber-image" />
        </div>
      </div>
      
      <div className="about-section">
        <div className="about-images">
          <img src={cyber3svg} alt="Digital Security" className="about-image" />
          <img src={cyber2svg} alt="Hacker Keyboard" className="about-image overlay" />
        </div>
        <div className="about-text">
          <h3 className="about-title">Discover Our Journey Protecting Your Digital World With Expertise And Care</h3>
          <p className="about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
      
      <div className="services-section">
        <h3 className="services-title">Protecting Your Digital Assets Expertly</h3>
        <p className="services-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis.</p>
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">🔒</div>
            <h4 className="service-title">Cyber Security Assessment</h4>
            <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🛡️</div>
            <h4 className="service-title">Intrusion Detection and Prevention</h4>
            <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h4 className="service-title">Incident Response and Recovery</h4>
            <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="features-image">
          <img src={cyber4svg} alt="Cyber Security Expert" className="feature-img" />
        </div>
        <div className="features-content" id="services">
          <h3 className="features-title">Key Service Features Protecting You</h3>
          <p className="features-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.</p>
          <div className="features-container">
            <div className="feature-card">
              <div className="feature-icon">📜</div>
              <h4 className="feature-title">Customized Security Solutions</h4>
              <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h4 className="feature-title">Vulnerability Assessment</h4>
              <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏳</div>
              <h4 className="feature-title">24/7 Incident Response</h4>
              <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h4 className="feature-title">User Training Programs</h4>
              <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-column">
          <h2 className="footer-logo">CyberEz</h2>
          <p>Lorem ipsum dolor </p>
          <div className="social-icons">
            <span>📷</span>
            <span>📘</span>
            <span>🐦</span>
            <span>▶️</span>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <p>Our Service</p>
          <p>About Us</p>
          <p>Pricing</p>
          <p>Testimonial</p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>📧 hello@website.com</p>
          <p>📍 838 Cantt Sialkot, ENG</p>
          <p>📞 +02 5421234560</p>
        </div>
        <div className="footer-column">
          <h3>Newsletter</h3>
          <input type="text" placeholder="Enter your email" className="newsletter-input" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}