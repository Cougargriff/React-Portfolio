/*
  Main Workspace for App
*/

import React from "react";
import Thumbnail from "./Thumbnail.js";
import ScrollWrapper from "./ScrollWrapper";
import github_logo from "../res/github_logo.svg";
import linked_logo from "../res/linkedin_logo.svg";
import mailto_logo from "../res/mailTo.svg"
import { motion } from "framer-motion";
import styled from 'styled-components';

import "./App.css";

// CREDIT! ------> https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin
// MANY THANKS. My buttons look hella pro now
function shadeHexColor(color, percent) {
  var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
  return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

const TwoColumnContent = styled.div`
    display: grid;
    grid-template-columns: minmax(250px, 1fr) 1fr;
    justify-items: center;
    align-items: center;

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }

`

const ThreeColumnContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 300px;
    padding-top: 20px;

    @media (max-width: 1105px) {
        display: flex;
        grid-template-columns: 1fr;
    }

`
const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 1rem;
  background: transparent;
  background-color: #A3D9FF;
  color: white;
  border: 2px solid ${props => shadeHexColor(props.color, 0.3)};
  text-decoration: none;
  background-color: ${props => shadeHexColor(props.color, 0.3)};
  transition-duration: 0.4s;

  &:hover {
    background-color: white;
    color: ${props => props.color}; 
  }
`

function navButtons() {
  return (
    <ThreeColumnContent>
      <Button  
      href="#projects"
      color='#F18E33'
      >
        Projects
      </Button>
      <Button  
      href="#about"
      color='#FF0000'
      >
        About
      </Button>
      <Button  
      href="#resume"
      color='#000080'
      >
        Resume
      </Button>
    </ThreeColumnContent>
  );
}

function navBar() {
  return (

        <TwoColumnContent>
          {navButtons()}
            <ThreeColumnContent>
            <motion.div
              className="container"
              whileHover={{ scale: 1.2, rotate: 0 }}
              whileTap={{ scale: 0.8, rotate: 0, borderRadius: "100%" }}
            >
              <Thumbnail
                link="https://github.com/Cougargriff"
                image={github_logo}
                title="Github Profile"
                category="Repos"
              />
            </motion.div>
          
            <motion.div
              className="container"
              whileHover={{ scale: 1.2, rotate: 0 }}
              whileTap={{ scale: 0.8, rotate: 0, borderRadius: "100%" }}
            >
              <Thumbnail
                link="https://www.linkedin.com/in/griffin-johnson-462393134"
                image={linked_logo}
                title="LinkedIn Profile"
                category="LinkedIn"
              />
            </motion.div>
          
            <motion.div
              className="container"
              whileHover={{ scale: 1.2, rotate: 0 }}
              whileTap={{ scale: 0.8, rotate: 0, borderRadius: "100%" }}
            >
              <Thumbnail
                link="mailto:griffinpjohnson@gmail.com"
                image={mailto_logo}
                title="Send me an Email!"
                category="MailTo"
              />
            </motion.div>
            </ThreeColumnContent>
            </TwoColumnContent>
  )
}

function App() {

  return (
      <div className="App">
        <section id="top">
        {navBar()}
        </section>
        <ScrollWrapper />
      </div>
  );
}

export default App;
