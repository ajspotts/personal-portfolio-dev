import React from 'react';
import Elements from "../components/particles";

const About = ({text, id}) => (
      <div id ={id}>
        <h1>Hello my name is Alec Spottswood and I am a <br/>Full Stack Software Developer.</h1>
        <p>{text}</p>
        <Elements />
      </div>
  )

export default About;
