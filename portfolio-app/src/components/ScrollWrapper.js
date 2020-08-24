import React from "react";
import Projects from "./Projects.js";
import About from "./About.js";
import Resume from "./Resume.js";
import styled from 'styled-components';
import ColorButton from "./ColorButton";

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
    display: flex;
    justify-content: center;
    padding: 100px;
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

  return (
    <div>
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
          <ColorButton href='#top'
          color='#ff6347'
          text='Top'/>
          {contactInfo()}
          {tagLine()}
        </TwoColumnContent>
      </section>
    </div>
  );
};

export default ScrollWrapper;
