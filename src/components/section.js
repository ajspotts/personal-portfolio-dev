import React from "react";

const Section = ({ title, subtitle, dark, id }) => (
  <div className={"section" + (dark ? " section-dark" : "")}>
    <div className="section-content" id={id}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>
)

export default Section;