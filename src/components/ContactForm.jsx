import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email.includes('@') || !form.message) {
      return setStatus('Please fill out all fields correctly.');
    }
    setStatus("Thanks — we'll be in touch!");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
          />
        </label>
      </div>
      <button type="submit">Send</button>
      {status && <p className="status">{status}</p>}
    </form>
  );
}