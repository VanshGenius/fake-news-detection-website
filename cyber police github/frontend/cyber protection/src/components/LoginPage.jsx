import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login to CyberEz</h2>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <a href="#">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}
