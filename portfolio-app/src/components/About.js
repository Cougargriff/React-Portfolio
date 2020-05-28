/*
    src/components/About.js
*/

import React from "react"
import styled from 'styled-components';

const AboutSection = styled.div`
    text-align: center;
`

const TwoColumnContent = styled.div`
    display: grid;
    grid-template-columns: minmax(250px, 1fr) 1fr;
    justify-items: center;
    align-items: center;

    @media (max-width: 1250px) {
        grid-template-columns: 1fr;
    }

`

const RoundedImage = styled.img`
    border-radius: 8px;
    width: 400px;
    margin-left: 200px;

    @media (max-width: 1250px) {
        margin-left: 0px;
    }

    @media (max-width: 400px) {
        margin-left: 0px;
        width: 250px;
    }
`

const AboutDescription = styled.p`
    font-size: 18px;
    line-height: 1.6;
    justify-self: start;
    align-self: start;
    padding: 10px 25px;

    margin-right: 200px;

    @media (max-width: 1250px) {
        margin-right: 0px;
    }
    
`

function content() {
    return (
        <AboutDescription className="contents">
            I am a software engineer who recently graduated from Cal Poly SLO. 
            Working on complex projects at Cal Poly has allowed me to develop a 
            diverse set of skills that I am always looking to expand. My passion for software has
            led me to create a variety of side projects including this very site.
        </AboutDescription>
    )
}

function AboutTitle() {
    return (
        <h1 className="headers">
            About Me
        </h1>
    )
} 

function profileImage() {
    return (
        <RoundedImage src="https://avatars3.githubusercontent.com/u/19522316?s=460&u=91ca27a2b75351c39c6be24e870b10070c04a1f3&v=4"/>
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