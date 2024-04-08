import React from "react";
import "./style.less";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ContactBoard = () => {
  return (
    <div className="contactPage">
      <div className="contactInfoBoard">
        <h2>Contact Information</h2>
        <div className="contactInfo">
          <p>
            <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;&nbsp;
            +1012 3456 789
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;&nbsp;
            demo@gmail.com</p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;&nbsp;
            132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
        </div>
      </div>
      <div className="contactFormBoard">
        <form>
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