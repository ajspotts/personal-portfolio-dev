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
  console.log(data.ProjectImgs);
  return (
  <Layout>
    <SEO title="Home" keywords={[`web`, `developer`, `full stack`, `application`, `react`, 'portfolio']} />
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
}

export default IndexPage

export const query = graphql`
  query allImgsQuery {
    site {
      siteMetadata {
        title
        description
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
`;

