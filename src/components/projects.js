import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby";

const Projects = ({text, id}) => (
  <StaticQuery
    query={graphql`
      query ProjectImgQuery {
        projectsImg: file(relativePath: { eq: "mountain.jpg" }) {
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
          title="Projects image"
          alt="Mountain"
          fluid={data.projectsImg.childImageSharp.fluid}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
        />
        <div className="overlay" />
        <div className="projects">
          <h1 className="name">
            <b>Projects</b>
          </h1>
          <p className="greetings">Please take a look at some of my recent work</p>
        </div>
        <div className="arrow animated bounceInDown">
        </div>
      </div>
    )}
  />
);

export default Projects;