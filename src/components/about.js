import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby";
import html5 from "../images/html5.svg";
import js from "../images/javascript.svg";
import php from "../images/php.svg";
import python from "../images/python.svg";
import css3 from "../images/css3.svg"
import react from "../images/react.svg";
import redux from "../images/redux.svg";
import angular from "../images/angular.svg";
import express from "../images/express.svg";
import graphQL from "../images/graphql.svg";
import nodejs from "../images/nodejs.svg";
import laravel from "../images/laravel.svg";
import django from "../images/django.svg";
import ruby from "../images/ruby.svg";
import rails from "../images/rails.svg";
import firebase from "../images/firebase.svg";
import mongodb from "../images/mongodb.svg";
import postgresql from "../images/postgresql.svg";



const About = ({id}) => (
  <StaticQuery
    query={graphql`
      query AboutImgQuery {
        aboutImg: file(relativePath: { eq: "stairs.jpg" }) {
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
          title="About image"
          alt="Stairs"
          fluid={data.aboutImg.childImageSharp.fluid}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
        />
        <div className="overlay" />
        <div className="about">
          <h1 className="name">
            <b>About</b>
          </h1>
          <div className="description">
              <p className="greetings">I am passionate learning and then utilizing any and all of the newest framweworks, tools and technologies related to web development.</p>
          </div>
          <div className="svg-container">
            <div className="logo-container">
              <a href="https://rebrand.ly/w1zfk5" target="_blank" rel="noopener noreferrer">
                <img src={html5} alt="html5" />
              </a>
              <h3>HTML</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/gpe80b" target="_blank" rel="noopener noreferrer">
                <img src={css3} alt="css3" />
              </a>
              <h3>CSS</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/gdw8nf" target="_blank" rel="noopener noreferrer">
                <img src={js} alt="js" />
              </a>
              <h3>JavaScript</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/5dmk0k" target="_blank" rel="noopener noreferrer">
                <img src={php} alt="php" />
              </a>
              <h3>PHP</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/51v3f7" target="_blank" rel="noopener noreferrer">
                <img src={ruby} alt="ruby" />
              </a>
              <h3>Ruby</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/u9f3bu" target="_blank" rel="noopener noreferrer">
                <img src={python} alt="python" />
              </a>
              <h3>Python</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/4711zo" target="_blank" rel="noopener noreferrer">
                <img src={react} alt="react" />
              </a>
              <h3>React</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/f4fdtb" target="_blank" rel="noopener noreferrer">
                <img src={redux} alt="redux" />
              </a>
              <h3>Redux</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/0af3pn" target="_blank" rel="noopener noreferrer">
                <img src={angular} alt="angular" />
              </a>
              <h3>Angular</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/8pwvla" target="_blank" rel="noopener noreferrer">
                <img src={express} alt="express" />
              </a>
              <h3>Express</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/chgco7" target="_blank" rel="noopener noreferrer">
                <img src={graphQL} alt="graphQL" />
              </a>
              <h3>GraphQL</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/fno5hy" target="_blank" rel="noopener noreferrer">
                <img src={nodejs} alt="nodejs" />
              </a>
              <h3>Node</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/jm3gu8" target="_blank" rel="noopener noreferrer">
                <img src={laravel} alt="laravel" />
              </a>
              <h3>Laravel</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/hbkv6c" target="_blank" rel="noopener noreferrer">
                <img src={django} alt="django" />
              </a>
              <h3>Django</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/71jw07" target="_blank" rel="noopener noreferrer">
                <img src={rails} alt="rails" />
              </a>
              <h3>Ruby on Rails</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/8jg10f" target="_blank" rel="noopener noreferrer">
                <img src={firebase} alt="firebase" />
              </a>
              <h3>Firebase</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/1lamx3" target="_blank" rel="noopener noreferrer">
                <img src={mongodb} alt="mongodb" />
              </a>
              <h3>MongoDB</h3>
            </div>
            <div className="logo-container">
              <a href="https://rebrand.ly/az0ssm" target="_blank" rel="noopener noreferrer">
                <img src={postgresql} alt="postgresql" />
              </a>
              <h3>PostgreSQL</h3>
            </div>
          </div>
        <div className="arrow animated bounceInDown">
        </div>
      </div>
    </div>
    )}
  />
);

export default About;
