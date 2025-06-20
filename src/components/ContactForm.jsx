import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState([]);
  const [errors, setErrors] = useState({});

  // Load all messages
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/messages`)
      .then(res => setMessages(res.data))
      .catch(err => console.error(err));
  }, []);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.includes('@')) errs.email = 'Valid email is required';
    if (!form.message.trim()) errs.message = 'Message cannot be empty';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, form);
      if (res.data.success) {
        setStatus('Message sent successfully!');
        setMessage(prev => [...prev, res.data.newMessage]);
        setForm({ name: '', email: '', message: '' });
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Server error';
      setStatus(`Error: ${errorMsg}`);
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">Send</button>
      </form>

      {status && <p className="status">{status}</p>}

      <h3>All Messages:</h3>
      <ul className="message-list">
        {message.map((msg, idx) => (
          <li key={idx}><strong>{msg.name}</strong>: {msg.message} ({msg.email})</li>
        ))}
      </ul>
    </div>
  );
}
