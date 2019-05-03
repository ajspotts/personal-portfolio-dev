import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Cover from "../components/cover";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

const IndexPage = ({ data }) => {
  const { edges: projectImgData } = data.ProjectImgs;
  return (
    <Layout>
    <SEO title="Home" keywords={[`web`, `developer`, `front end`, `full stack`, `application`, `react`, `portfolio`]} />
    <Navbar />
    <Cover id="home"/>
    <About id="about"/>
    <Projects id="projects" projectImgs={projectImgData}/>
    <Contact id="contact"/>
    <footer>
      © {new Date().getFullYear()} Alec Spottswood
    </footer>
  </Layout>
  )
};

export default IndexPage

export const query = graphql`
      query ProjectsImgQuery {
        ProjectImgs: allFile(
          sort: { order: ASC, fields: [absolutePath] }
          filter: { relativePath: { regex: "/projects/.*.png/" } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 320) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `;
