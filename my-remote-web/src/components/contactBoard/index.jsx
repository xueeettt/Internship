import React from "react";
import "./style.less";
import api from "../../api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ContactBoard = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value, 
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    };

    try {
      const response = await api.sendContactForm(formData);
      alert('Message sent successfully!');
      console.log(response.data);
    } catch (error) {
      alert('Failed to send message. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div className="contactPage">
      <div className="contactInfoBoard">
        <h2>Contact Information</h2>
        <div className="contactInfo">
          {/* <p>
            <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;&nbsp;
            +1012 3456 789
          </p> */}
          <p>
            <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;&nbsp;
            research.remod@gmail.com</p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;&nbsp;
            29 Regent St, Fitzroy VIC 3065</p>
        </div>
      </div>
      <div className="contactFormBoard">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="firstName" placeholder="First Name" />
            <input type="text" id="lastName" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder="Email" />
            <input type="tel" id="phone" placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <textarea id="message" placeholder="Write your message..."></textarea>
          </div>
          <button type="submit" className="send-message-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactBoard;