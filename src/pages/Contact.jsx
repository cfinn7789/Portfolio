import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Please fill in all fields.');
    } else {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setFormSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <div className="contact-form">
          <h1 className="title">Name</h1>
          <input
            className="input is-primary"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            aria-label="Name"
          />
          <h1 className="title">Email</h1>
          <input
            className="input is-primary"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            aria-label="Email"
          />
          <h1 className="title">Message</h1>
          <textarea
            className="textarea is-primary"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            aria-label="Message"
          />
          <button type="submit" className="btn btn-success">
            Submit
          </button>

          {formSubmitted && <p className="success-message">Form submitted successfully!</p>}
        </div>
      </form>

      <div className="contact-info">
        <h1 className="title">Contact Me</h1>
        <div className="my-contact">
          <a href="tel:+689-247-7666">689-247-7666</a>
          <a href="mailto:cfinn7789@gmail.com">cfinn7789@gmail.com</a>
          <a href="https://github.com/cfinn7789">My Github</a>
        </div>
      </div>
    </div>
  );
}