import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby";
import projectList from "../data/projects.json";

const Projects = ({ id, projectImgs }) => (
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
        ProjectImgs: allFile(
          sort: { order: ASC, fields: [absolutePath] }
          filter: { relativePath: { regex: "/projects/.*.png/" } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 320) {
                  ...GatsbyImageSharpSizes
                }
              }
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
          <div className="project-list">
            {projectList.map(project => {
              const { edges: projectImgData } = data.ProjectImgs;
              const image = projectImgData.find(n => {
                return n.node.relativePath === `projects/${project.img}`;
              });
              const imageSizes = image.node.childImageSharp.sizes;
              return (
                <a
                  href={project.url}
                  key={project.url}
                  // className={singleCardClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-img">
                    <Img
                      title={project.name}
                      alt="Screenshot of Project"
                      sizes={imageSizes}
                      className="card-img_src center-block"
                    />
                  </div>
                  <div className="blue-divider" />
                  <div className="card-info">
                    <h4 className="card-name">{project.name}</h4>
                    <p>{project.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="arrow animated bounceInDown">
        </div>
      </div>
    )}
  />
);

export default Projects;