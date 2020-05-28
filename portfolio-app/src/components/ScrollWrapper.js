import React from "react";
import Home from "./Home";


import Projects from "./Projects.js";
import About from "./About.js";
import Resume from "./Resume.js";
import { Button } from "rebass";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components';

const TwoColumnContent = styled.div`
    display: grid;
    grid-template-columns: minmax(250px, 1fr);
    justify-items: center;
    align-items: center;
    padding-bottom: 20px;

    @media (max-width: 1105px) {
        grid-template-columns: 1fr;
    }
`

const FooterContainer = styled.a`
    padding-top: 10px;
`

const FixedSection = styled.section`
    min-height: 1000px;
    background-color: white;
`

const TopSection = styled.section`
    min-height: 1500px;
    background-image: url(https://i.imgur.com/YabLT7b.jpg);
    background-size: cover;

    @media (max-width: 1105px) {
      grid-template-columns: 1fr;
  }
`

const ScrollWrapper = () => {



  function tagLine() {
    return (
      <FooterContainer>
          Site v1.0 created by Griffin Johnson
      </FooterContainer>
    )
  }

  function contactInfo() {
    return (
      <FooterContainer>
          griffinpjohnson@gmail.com &#8226; (425) 417 - 5098
      </FooterContainer>
    )
  }

  //framer motion elements have initial, animate, and varaints properties
  //initial is the initial state
  //animate changes the state of the element
  return (
    <div>
      <TopSection id="home">
          <Home/>
      </TopSection>

      <FixedSection  id="projects">
        <Projects/>
      </FixedSection>
      <FixedSection   id="about">
          <About/>
      </FixedSection>
      <FixedSection   id="resume">
        <div>
          <Resume/>
        </div>
      </FixedSection>
      <section>
        <TwoColumnContent>
          <AnchorLink href='#top'>
              <Button ml={2} variant='primary' className="contents"
                      sx={{
                          backgroundColor: '#ffb347',
                          marginRight: '10px',
                      ':hover': {
                      backgroundColor: 'red',}
                  }}>Back to Top
              </Button>
          </AnchorLink>
          {contactInfo()}
          {tagLine()}
        </TwoColumnContent>
      </section>
    </div>
  );
};

export default ScrollWrapper;
