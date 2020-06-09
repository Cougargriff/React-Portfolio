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
import Home from "./Home";
import cover from '../res/cover.jpg';
import ColorButton from "./ColorButton";
import "./Styling/App.css";

const TwoColumnContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 750px) {
        align-items: center;
        flex-direction: column;
    }
`

const ThreeColumnContent = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px;

    @media (max-width: 1105px) {
        display: flex;
        grid-template-columns: 1fr;
    }

`
const TopSection = styled.section`
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:linear-gradient(to bottom, rgba(255, 255, 255, 0.50), rgb(255, 255, 255) 100%), url(${cover});
    background-size: cover;
    background-position-y: 20%;

    @media (max-width: 1105px) {
      grid-template-columns: 1fr;
  }
`
function navButtons() {
  return (
    <ThreeColumnContent>
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
        <TopSection id="top">
          {navBar()}
          <Home/>
        </TopSection>
        <ScrollWrapper />
      </div>
  );
}

export default App;
