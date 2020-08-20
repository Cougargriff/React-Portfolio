import resume from '../res/resume_curr-1.jpg';
import React from 'react';
import styled from 'styled-components';
import ColorButton from './ColorButton';

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

const TwoColumnContent = styled.div`
    display: flex;
    flex-flow: column;
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
            <ColorButton 
            href="https://github.com/Cougargriff/ResumeLatex/raw/master/resume_curr.pdf"
            color='#228B22'
            text='Download'/>       
        </TwoColumnContent>
        <StyledImage src={resume}></StyledImage>
      </div>
    )
}

export default Resume;