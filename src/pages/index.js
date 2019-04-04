import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Cover from "../components/cover";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import dummyText from "../components/dummyText";
// import Elements from "../components/particles";

const IndexPage = () => (
  <Layout>
    {/* <div> */}
    <SEO title="Home" keywords={[`web`, `developer`, `full stack`, `application`, `react`, 'portfolio']} />
    <Navbar />
    <Cover id="home"/>
    <About text={dummyText} id="about"/>
    <Projects text={dummyText} id="projects"/>
    <Contact text={dummyText} id="contact"/>
    <footer>
      © {new Date().getFullYear()}
    </footer>
    {/* </div> */}
  </Layout>
)

export default IndexPage
