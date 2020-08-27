/*
  Main Workspace for App
*/
import React from "react";
import { useSelector } from 'react-redux'

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Thumbnail from "./Thumbnail.js";
import ScrollWrapper from "./ScrollWrapper";
import github_logo from "../res/github_logo.svg";
import linked_logo from "../res/linkedin_logo.svg";
import mailto_logo from "../res/mailTo.svg"
import { motion } from "framer-motion";
import Home from "./Home";
import Blog from "./Blog";
import Editor from "./Editor"
import ColorButton from "./ColorButton";
import "./Styling/App.css";
import {
  TwoColumnContent,
  ThreeColumnContent,
  FourColumnContent,
  TopSection
} from "./Containers"
import Admin from "./Admin.js";



function NavButtons() {
  const isAdmin = useSelector((state) => state.EditorReducer.isAdmin);

  return (
    <FourColumnContent>
      <ColorButton  
      href="#projects"
      color='#F18E33'
      text='Projects'
      />
      <ColorButton  
      href="#about"
      color='#FF0000'
      text='About'
      />
      <ColorButton  
      href="#resume"
      color='#000080'
      text='Resume'
      />
      <ColorButton  
      href="/blog"
      color='#53DC98'
      text='Blog'
      />
      { isAdmin ? <ColorButton
          color='#779ECB'
          text="Admin"
          href="/admin"
        /> : undefined }
    </FourColumnContent>
  );
}

function NavBar() {
  return (
        <TwoColumnContent>
          <NavButtons/>
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

function Main() {
  return (
    <div className="App">
      <TopSection id="top">
        <NavBar/>
        <Home/>
      </TopSection>
      <ScrollWrapper />
    </div>
  )
}


function App() {
  return (
    <Router>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/admin-editor">
          <Editor/>
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
    </Router>
  );
}

export default App;
