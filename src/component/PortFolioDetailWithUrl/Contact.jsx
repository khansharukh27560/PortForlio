import React, { useState } from "react";
import "./contact.css";
import sharukh from '../../image/resume_pdf.pdf'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const { name, message } = formData;
    const whatsappMessage = `Hi, I'm ${name}! ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = "9634317977"; // Replace with your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("This is a demo! You can connect this to a backend or email service.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="d-flex justify-content-between">
    <section className="contact-section ">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">Let's get in touch. Fill out the form or reach out on WhatsApp!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="mailto"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <div className="contact-buttons">
            <a href="mailto:shahrukhmirza88@gmail.com" type="submit" className="btn btn-primary">
              Send Message
            </a>
            <button type="button" className="btn btn-whatsapp" onClick={handleWhatsApp}>
              <i className="fab fa-whatsapp"></i> WhatsApp
            </button>
          </div>
        </form>
      </div>
      
    </section>
    
      <div className="resume-container" style={{width:'600px',height:'100%',
        display:'flex',justifyContent:'center',alignItems:'center'
       }}>
        {/* <h2 className="resume-title">Resume</h2> */}
        <img src={sharukh} alt="sharukh khan resume" style={{width:'100%',height:'100%'}}/>
      </div>
    </div>
  );
};

export default Contact;
