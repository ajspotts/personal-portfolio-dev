import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = ({id}) => (
  <section id={id} className="section">
    <div className="contact">
      <h1 className="name"><b>Contact Me</b></h1>
      <div className="contacts-box">
      <span id="contacts"><h3><FaEnvelope /> ajspottswood@gmail.com</h3></span>
      <span id="contacts"><a href="https://www.linkedin.com/in/alexander-spottswood" target="_blank" rel="noopener noreferrer"><h3><FaLinkedin /> LinkedIn</h3></a></span>
      </div>
    </div>
  </section>
);

export default Contact;