/*
  Main Workspace for App
*/

import React from "react";
import Thumbnail from "./Thumbnail.js";
import ScrollWrapper from "./ScrollWrapper";
import github_logo from "../res/github_logo.svg";
import linked_logo from "../res/linkedin_logo.svg";
import mailto_logo from "../res/mailTo.svg"
import { Button } from "rebass";
import { motion } from "framer-motion";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components';

import "./App.css";

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

function navButtons() {
  return (
    <ThreeColumnContent>
    <AnchorLink href='#projects'>
      <Button ml={2} variant='primary' 
              sx={{
                  backgroundColor: '#82AFD4',
              ':hover': {
              backgroundColor: '#A3D9FF',}
          }}>Projects
      </Button>
    </AnchorLink>
    <AnchorLink href='#about'>
      <Button ml={2} variant='primary' 
              sx={{
                  backgroundColor: '#DA3E52',
              ':hover': {
              backgroundColor: '#ED8593',}
          }}>About
      </Button>
    </AnchorLink>
    <AnchorLink href='#resume'>
      <Button ml={2} variant='primary' 
              sx={{
                  backgroundColor: '#69A87D',
              ':hover': {
              backgroundColor: '#96E6B3',}
          }}>Resume
      </Button>
    </AnchorLink>
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
