/*
    src/components/Projects.js
*/
import resume from '../res/resume_curr-1.jpg';
import React from 'react';
import styled from 'styled-components';

// CREDIT! ------> https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin
// MANY THANKS. My buttons look hella pro now
function shadeHexColor(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
  }

const StyledImage = styled.img`
    border-radius: 8px;
    width: 1400px;

    @media (max-width: 1510px) {
        margin-left: 0px;
        width: 1000px
    }

    @media (max-width: 1105px) {
        margin-left: 0px;
        width: 700px
    }

    @media (max-width: 700px) {
        margin-left: 0px;
        width: 350px
    }
`

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
    display: block;
    justify-content: space-between;
    justify-items: center;
    align-items: center;

    @media (max-width: 1105px) {
      
    }
`

/* TODO figure out lazy loading from github hosted resume */

function Resume(props) {
    return (
        <div>    
        <TwoColumnContent>
            <h1 className='headers' style={{
                textAlign: 'center'
            }}>Resume</h1>
            <Button href="https://github.com/Cougargriff/ResumeLatex/raw/master/resume_curr.pdf"
            color='#228B22'>
                Download
            </Button>          
        </TwoColumnContent>
        <StyledImage src={resume}></StyledImage>
      </div>
    )
}

export default Resume;