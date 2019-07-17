import React from "react"
import Img from "gatsby-image"
import "../styles/cover.css"
import { StaticQuery, graphql } from "gatsby"
import Elements from "../components/particles"

const Cover = ({ id }) => (
  <StaticQuery
    query={graphql`
      query CoverImgQuery {
        coverImg: file(relativePath: { eq: "aurora.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section id={id} className="cover animated">
        <Img
          title="Cover image"
          alt="Aurora"
          fluid={data.coverImg.childImageSharp.fluid}
          style={{
            borderBottom: "2px solid #0F2027",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <div className="overlay" />
        <div className="center">
          <h3 className="name">
            <b>Alec Spottswood</b>
          </h3>
          <h3 className="greetings">Full Stack Developer</h3>
        </div>
        <div className="arrow animated bounceInDown" />
        <Elements />
      </section>
    )}
  />
)

export default Cover
