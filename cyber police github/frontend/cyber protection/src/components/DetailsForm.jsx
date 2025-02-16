import React from "react";
import "./DetailsForm.css";

export default function DetailsForm() {
  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Enter Your Details</h2>
        <form className="details-form">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" required />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter your message" rows="4"></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}
