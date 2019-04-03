import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby";

const About = ({text, id}) => (
  <StaticQuery
    query={graphql`
      query AboutImgQuery {
        aboutImg: file(relativePath: { eq: "wave.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div id={id} className="cover animated">
        <Img
          title="About image"
          alt="Wave"
          fluid={data.aboutImg.childImageSharp.fluid}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
        />
        <div className="overlay" />
        <div className="center">
          <h1 className="name">
            <b>About</b>
          </h1>
          <p className="greetings">{text}</p>
        </div>
        <div className="arrow animated bounceInDown">
        </div>
      </div>
    )}
  />
);

export default About;
