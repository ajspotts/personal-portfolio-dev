/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Navbar from "./navbar";
import Header from "./header";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import "../styles/layout.css";
import dummyText from "./dummyText";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Navbar />
        <About text={dummyText} id="about"/>
        <Projects text={dummyText} id="projects"/>
        <Contact text={dummyText} id="contact"/>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}
            {/* {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> */}
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
