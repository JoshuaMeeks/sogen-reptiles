import React, { useState } from 'react';
import './Contact.css';

export const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="contact-container">
      <h1 className="title">contact us</h1>
      <p>
        You can contact us via email at <a href="#">contact@sogenreptiles.com</a>, or fill out this form:
      </p>

      <form onSubmit={handleSubmit} className='contact-form'>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button type="submit">{status}</button>
      </form>

      <p>Visit us on <a href='https://www.instagram.com/southerngenetics'>Instagram</a></p>
    </div>
  )
}