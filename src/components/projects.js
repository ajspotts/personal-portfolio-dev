import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import "../styles/projects.css";
import projectList from "../data/projects.json";

const Projects = ({ id, projectImgs }) => (
  <StaticQuery
    query={graphql`
      query ProjectImgQuery {
        projectsImg: file(relativePath: { eq: "top.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
       
      }
    `}
    render={data => (
      <section id={id} className="section cover animated">
        <Img
          title="Projects image"
          alt="Top"
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
        <h1 className="name mt-5"><b>Projects</b></h1>
          <div className="description mb-4">
              <h5 className="greetings">Please take a look at some of my recent work</h5>
          </div>
          <div className="section-content">
            <div className="project-list">
              {projectList.map(project => {
                const image = projectImgs.find(n => {
                  return n.node.relativePath === `projects/${project.img}`;
                });
                const imageFluid = image.node.childImageSharp.fluid;
                return (
                  <a
                    href={project.url}
                    key={project.url}
                    className="single-card"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-img">
                      <Img
                        title={project.name}
                        alt="Screenshot of Project"
                        fluid={imageFluid}
                        className="card-img_src center-block"
                      />
                    </div>
                    <div className="divider" />
                    <div className="card-info">
                      <h5 className="card-name">{project.name}</h5>
                      <p>{project.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          </div>
        <div className="arrow animated bounceInDown">
        </div>
      </section>
    )}
  />
);

export default Projects;