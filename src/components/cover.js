import React from "react";
import Img from "gatsby-image";
import "../styles/cover.css";
import { StaticQuery, graphql } from "gatsby";
import Elements from "../components/particles";

const Cover = ({id}) => (
  <StaticQuery
    query={graphql`
      query CoverImgQuery {
        coverImg: file(relativePath: { eq: "space.jpg" }) {
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
          title="Cover image"
          alt="Space"
          fluid={data.coverImg.childImageSharp.fluid}
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
            <b>Alec Spottswood</b>
          </h1>
          <p className="greetings">Welcome to my portfolio page</p>
        </div>
        <div className="arrow animated bounceInDown">
        </div>
        <Elements />
      </div>
    )}
  />
);

export default Cover;