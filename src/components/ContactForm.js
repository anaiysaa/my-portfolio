import React, { useState } from 'react';

function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* Replace with your actual Web3Forms access key */}
      <input type="hidden" name="access_key" value="622c89ef-cfbc-40f4-90cc-c6e9bf5ca263" />
      
      <div className="field">
        <input
          type="text"
          name="subject"
          className="subject-input"
          placeholder=""
          required
        />
      </div>
      
      <div className="field">
        <input
          type="email"
          name="email"
          className="email-input"
          placeholder=""
          required
        />
      </div>
      
      <div className="field">
        <textarea
          name="message"
          className="message-input"
          placeholder=""
          required
        />
      </div>
      
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'SENDING...' : 'SEND'}
      </button>
      
      {status === 'success' && (
        <p style={{ color: '#60bd63', fontSize: '12px', textAlign: 'right', margin: '8px 0 0 0' }}>
          Message sent successfully!
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: '#ae4d46', fontSize: '12px', textAlign: 'right', margin: '8px 0 0 0' }}>
          Failed to send. Please try again.
        </p>
      )}
    </form>
  );
}

export default ContactForm;