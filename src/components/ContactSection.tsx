"use client";

import { FormEvent, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_nw2fa5t';
const TEMPLATE_ID = 'template_d4dxvlb';
const PUBLIC_KEY = 'exfMa0ES1_LHm7seN';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Completeaza numele, emailul si mesajul.');
      return;
    }
    setIsSending(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      });
      alert('Mesajul a fost trimis cu succes!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('A aparut o eroare la trimitere.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Get in touch</h1>
        <span>Do you have a project in your mind, contact me here</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              Find Me <i className="uil uil-corner-right-down"></i>
            </h2>
            <p>
              <i className="uil uil-envelope"></i> Email: chindrisandrei2005@gmail.com
            </p>
            <p>
              <i className="uil uil-phone"></i> Tel: +40 750 457 584
            </p>
          </div>
        </div>
        <div className="col">
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <input
                type="text"
                className="input-field"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              />
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div className="text-area">
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              ></textarea>
            </div>
            <div className="form-button">
              <button className="btn" type="submit" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send'} <i className="uil uil-message"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
