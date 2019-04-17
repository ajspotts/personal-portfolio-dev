import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Cover from "../components/cover";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
// import Elements from "../components/particles";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web`, `developer`, `full stack`, `application`, `react`, 'portfolio']} />
    <Navbar />
    <Cover id="home"/>
    <About id="about"/>
    <Projects id="projects"/>
    <Contact id="contact"/>
    <footer>
      © {new Date().getFullYear()}
    </footer>
  </Layout>
)

export default IndexPage
