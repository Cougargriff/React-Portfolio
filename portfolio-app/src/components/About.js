/*
    src/components/About.js
*/

import React from "react"
import styled from 'styled-components';
import Portrait from '../res/portrait.jpg';

const AboutSection = styled.div`
    text-align: center;
`

const TwoColumnContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 200px 1fr;
    justify-items: center;
    align-items: center;

    @media (max-width: 1400px) {
        grid-template-columns: 1fr;
    }

`

const RoundedImage = styled.img`
    border-radius: 8px;
    width: 400px;
    opacity: 95%;

    @media (max-width: 1400px) {
        margin-left: 0px;
    }

    @media (max-width: 400px) {
        margin-left: 0px;
        width: 250px;
    }
`
const Space = styled.div`
    width: 200px;
`

const Container = styled.div`
    align-content: center;
`

const AboutDescription = styled.div`
    font-size: 18px;
    line-height: 1.6;
    padding: 10px 25px;
    align-text: center;
    width: 400px;

    @media (max-width: 1400px) {
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
        <RoundedImage src={Portrait}/>
    )
}

function About(props) {
    return (
        <AboutSection>
            {AboutTitle()}
            <TwoColumnContent>
                {profileImage()}
                <Space/>
                <Container>
                    {content()}
                </Container>
                
            </TwoColumnContent>
        </AboutSection>
    )
}

export default About;