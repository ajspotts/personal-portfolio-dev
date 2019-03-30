import React from 'react';

const Contact = ({text, id}) => (
  <div id={id}>
    <h1>Contact Me</h1>
    <p>{text}</p>
  </div>
);

export default Contact;