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
import Comic from "./Comic";
import Editor from "./Editor"
import ColorButton from "./ColorButton";
import "./Styling/App.css";
import {
  TwoColumnContent,
  ThreeColumnContent,
  FourColumnContent,
  TopSection
} from "./Containers"
import ReactGA from 'react-ga';
import Admin from "./Admin.js";

const ga_id = "G-6J56746C0H";
ReactGA.initialize(ga_id);
ReactGA.set({
})

function NavButtons() {
  const isAdmin = useSelector((state) => state.EditorReducer.isAdmin);
  const theme = useSelector((state) => state.ThemeReducer.theme);

  return (
    <FourColumnContent>
      <ColorButton  
      href="#projects"
      color={theme.color1}
      text='Projects'
      />
      <ColorButton  
      href="#about"
      color={theme.color2}
      text='About'
      />
      <ColorButton  
      href="#resume"
      color={theme.color3}
      text='Resume'
      /> 
      <ColorButton  
      href="/xkcd-comic"
      color={theme.color4}
      text='Comic'
      /> 
      {
      // <ColorButton  
      // href="/blog"
      // color='#53DC98'
      // text='Blog'
      // />
      }
      { isAdmin ? <ColorButton
          color={theme.color5}
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

const onUpdate = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

function App() {

  return (
    <Router onUpdate={onUpdate}>
        <Route exact path="/">
          <Main/>
        </Route>
        {/* optional id param for updating existing posts */}
        <Route path="/blog/:id?" component={Blog} />
        <Route path="/xkcd-comic" component={Comic} />
        <Route path="/admin-editor/:id?" component={Editor} />
        <Route path="/admin">
          <Admin/>
        </Route>
    </Router>
  );
}

export default App;
