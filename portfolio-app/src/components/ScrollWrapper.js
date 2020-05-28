import React from "react";
import Home from "./Home";


import Projects from "./Projects.js";
import About from "./About.js";
import Resume from "./Resume.js";
import styled from 'styled-components';

// CREDIT! ------> https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin
// MANY THANKS. My buttons look hella pro now
function shadeHexColor(color, percent) {
  var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
  return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}
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
              <Button href='#top'
              color='#ff6347'>
                Back to Top
              </Button>
          {contactInfo()}
          {tagLine()}
        </TwoColumnContent>
      </section>
    </div>
  );
};

export default ScrollWrapper;
