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
                <div className="icons">
                    <a href="/path/to/my/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <img src={resume}/>
                    </a>
                    <a href="https://github.com/anaiysaa" target="_blank" rel="noopener noreferrer">
                        <img src={github}/>
                    </a>
                    <a href="https://www.linkedin.com/in/anaiysaadeswal/" target="_blank" rel="noopener noreferrer">
                        <img src={linkdin}/>
                    </a>
                </div>
                 <ContactForm />
            </div>
        </section>

    </div>
  );
}

export default Contacts;