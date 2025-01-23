import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch With Us!</h1>
      <p className="contact-description">
        We’d love to hear from you! Please fill out the form below.
      </p>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Phone" required />
          <input type="text" placeholder="Company Name" required />
        </div>
        <textarea
          placeholder="Write your message"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
      <div className="contact-details">
        <h2>Contact Information</h2>
        <p>
          <strong>Address:</strong> Near Jayadev Govt Hospital , Govt Veternary Hospital Road , Annapurna Cross Kalaburagi – 585101, Karnataka
        </p>
        <p>
          <strong>Phone:</strong> +91-9844277236
        </p>
        <p>
          <strong>Email:</strong> vishwasolar@gmail.com
        </p>
      </div>
      <div className="contact-map">
        <h2>Our Location</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15244.702204255105!2d76.83!3d17.33!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc91ff97e77b691%3A0x0!2zMTfCsDE5JzQ4LjAiTiA3NsKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1673885290105!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
