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
    <div style={{ fontFamily: "Press Start 2P" }}>
      Hello World ... Welcome to my portfolio website :)
    </div>
  );
}

function navBar() {
  return (
    <Breadcrumb separator=" / ">
      <Breadcrumb.Item>
      <AnchorLink href='#projects'>Projects</AnchorLink>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
      <AnchorLink href='#about'>About</AnchorLink>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
      <AnchorLink href='#resume'>Resume</AnchorLink>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

function App() {
  return (
      <div className="App">
        {titleSnippet()}
        <section id="top">
          <Flex alignItems="center" px={3} py={4} bg="muted">
            {navBar()}
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
        </section>
        <ScrollWrapper />
      </div>
  );
}

export default App;
