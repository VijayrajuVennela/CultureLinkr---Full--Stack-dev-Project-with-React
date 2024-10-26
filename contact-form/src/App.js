import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Thank you! Your message has been sent successfully.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSuccessMessage(''), 3000);
  };
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange}required></textarea>
        <button type="submit">Click Here To Submit</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
}

export default App;
