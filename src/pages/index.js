import React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navbar from "../components/navbar";
import Cover from "../components/cover";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import dummyText from "../components/dummyText";
// import Elements from "../components/particles";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web`, `developer`, `full stack`, `application`, `react`, 'portfolio']} />
    {/* <Cover coverImg={space}/> */}
    <div>
    <Navbar />
    <About text={dummyText} id="about"/>
    <Projects text={dummyText} id="projects"/>
    <Contact text={dummyText} id="contact"/>
    </div>
    <footer>
      © {new Date().getFullYear()}
    </footer>
  </Layout>
)

export default IndexPage
