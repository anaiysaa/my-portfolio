import React, { useState } from 'react';
import '../styles/Contacts.css';

function ContactForm () {
    return (
        <form className="contact-form">
  <div className="field subject-field">
    <input
      type="text"
      name="subject"
      required
      className="subject-input"
    />
  </div>
  <div className="field email-field">
    <input
      type="email"
      name="email"
      required
      className="email-input"
    />
  </div>
  <div className="field message-field">
    <textarea
      name="message"
      rows="5"
      required
      className="message-input"
    />
  </div>

  <button type="submit">S E N D</button>
</form>

    );
}

export default ContactForm;