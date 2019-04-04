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
        aboutImg: file(relativePath: { eq: "pillars.jpg" }) {
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
          alt="Wave"
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
            <img src={html5} alt="html5" />
            <img src={css3} alt="css3" />
            <img src={js} alt="js" />
            <img src={php} alt="php" />
            <img src={ruby} alt="ruby" />
            <img src={python} alt="python" />
            <img src={react} alt="react" />
            <img src={redux} alt="redux" />
            <img src={angular} alt="angular" />
            <img src={express} alt="express" />
            <img src={graphQL} alt="graphQL" />
            <img src={nodejs} alt="nodejs" />
            <img src={laravel} alt="laravel" />
            <img src={django} alt="django" />
            <img src={rails} alt="rails" />
            <img src={firebase} alt="firebase" />
            <img src={mongodb} alt="mongodb" />
            <img src={postgresql} alt="postgresql" />
          </div> 
        </div>
        <div className="arrow animated bounceInDown">
        </div>
      </div>
    )}
  />
);

export default About;
