import React from "react";
import Elements from "../components/particles";
import Blue from "../videos/blue.mp4";
import "../styles/cover.css";

const Video = ({id}) => (
  <section id={id} className="cover">
  <video 
    autoPlay 
    loop
    muted
    style={{
      objectFit: "fill",
      borderBottom: "2px solid #0F2027",
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%"
    }}
    >
    <source src={Blue} type="video/mp4" />
  </video>
    <div className="overlay" />
        <div className="center">
          <h3 className="name">
            <b>Alec Spottswood</b>
          </h3>
          <h3 className="greetings">Full Stack Web Developer</h3>
        </div>
        <div className="arrow animated bounceInDown">
    </div>
        <Elements />
  </section>
);

export default Video