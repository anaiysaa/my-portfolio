import React from 'react';
import '../styles/Contacts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Topbar from '../components/Topbar';
import ContactForm from '../components/ContactForm';
import ContactPostcards from '../assets/images/ContactPostcards.png';

function Contacts() {
  useEffect(() => {
      AOS.init({ duration: 2000, offset: 50, once: false});
    }, []);

  return (
    <div>
        <Topbar />
        <section id = "contacts">
            <div className = "contacts-container">
                <img src = {ContactPostcards} className = "postcards" data-aos="fade-up"/>
                 <ContactForm />
            </div>
        </section>

    </div>
  );
}

export default Contacts;