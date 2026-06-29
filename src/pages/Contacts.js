import React from 'react';
import '../styles/Contacts.css';

import Topbar from '../components/Topbar';
import ContactForm from '../components/ContactForm';
import ContactPostcards from '../assets/images/ContactPostcards.webp';

function Contacts() {
  return (
    <div>
      <Topbar />
      <section id="contacts">
        <div className="contacts-container">
          {/* Wrapper div that contains both postcard and form */}
          <div
            className="postcard-wrapper"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-offset="50"
            data-aos-once="false"
          >
            <img 
              src={ContactPostcards}
              className="postcards"
              alt="Contact postcards"
              loading="lazy"
            />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacts;