import React from 'react';
import '../styles/Contacts.css';

import Topbar from '../components/Topbar';
import ContactForm from '../components/ContactForm';
import ContactPostcards from '../assets/images/ContactPostcards.png';
import github from '../assets/icons/github.png';
import linkdin from '../assets/icons/linkdin.png';
import resume from '../assets/icons/resume.png';


function Contacts() {
  return (
    <div>
        <Topbar />
        <section id = "contacts">
            <div className = "contacts-container">
                <img src = {ContactPostcards} className = "postcards"/>
                 <ContactForm />
            </div>
        </section>

    </div>
  );
}

export default Contacts;