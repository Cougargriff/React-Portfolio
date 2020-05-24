/*
    src/components/About.js
*/

import React from "react"
import Paragraph from "antd/lib/skeleton/Paragraph"
import styled from 'styled-components';

const AboutSection = styled.div`
    text-align: center;
    margin: 0;
`

const TwoColumnContent = styled.div`
    display: grid,
    grid-template-columns: 8ch auto;
    justify-items: center;
    align-items: center;
`

const RoundedImage = styled.img`
    border-radius: 30px;
    width: 400px;
`

const AboutDescription = styled.p`
    font-size: 18px;
    line-height: 1.6;
    justify-self: start;
    align-self: start;
    padding: 10px 25px;
`

function content() {
    return (
        <AboutDescription className="contents" >
        I am a software engineer who recently graduated from Cal Poly SLO. 
        Working on complex projects at Cal Poly has allowed me to develop a 
        diverse set of skills that I am always looking to expand. My passion for software has
        led me to create a variety of side projects including this very site.
        </AboutDescription>
    )
}

function AboutTitle() {
    return (
        <h1 className="headers" style={{
            textAlign: 'center',
        }}>
            About Me
        </h1>
    )
} 

function profileImage() {
    return (
        <RoundedImage src="https://avatars3.githubusercontent.com/u/19522316?s=460&u=91ca27a2b75351c39c6be24e870b10070c04a1f3&v=4">
        </RoundedImage>
    )
}

function About(props) {
    return (
        <AboutSection>
            {AboutTitle()}
            <TwoColumnContent>
                {profileImage()}
                {content()}
            </TwoColumnContent>
        </AboutSection>
    )
}

export default About;