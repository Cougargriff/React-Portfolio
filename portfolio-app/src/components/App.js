/*
  Main Workspace for App
*/

import React from "react";
import logo from "../res/logo.svg";

import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./Projects.js";
import About from "./About.js";
import Home from "./Home.js";
import Thumbnail from "./Thumbnail.js";
import Resume from "./Resume.js";

import ScrollWrapper from "./ScrollWrapper";

import github_logo from "../res/github_logo.svg";
import linked_logo from "../res/linkedin_logo.svg";
import { Breadcrumb } from "antd";
import { Flex, Button, Box } from "rebass";
import { motion, Switch } from "framer-motion";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import "./App.css";


function titleSnippet() {
  return (
    <div className="snippet">
      Hello World ... Welcome to my portfolio website :)
    </div>
  );
}

function navButtons() {
  return (
    <Flex alignItems="center" px={3} py={4} bg="muted">
    <Box mx="auto" />
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
  </Flex>
  );
}

function navBar() {
  return (

        <Flex alignItems="center" px={3} py={4} bg="muted">
          {navButtons()}
            <Box mx="auto" />
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
            &nbsp; &nbsp;
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
            </Flex>
  )
}

function App() {

  return (
      <div className="App">
        {titleSnippet()}
        <section id="top">
        {navBar()}
        </section>
        <ScrollWrapper />
      </div>
  );
}

export default App;
