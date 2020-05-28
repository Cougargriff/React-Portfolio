/*
    src/components/Projects.js
*/
import resume from '../res/resume_curr-1.jpg';
import React from 'react';
import { Button, Link } from 'rebass';
import styled from 'styled-components';

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
    display: grid;
    grid-template-columns: minmax(250px, 1fr) 1fr;
    justify-items: center;
    align-items: center;

    @media (max-width: 1105px) {
        grid-template-columns: 1fr;
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

            
            <Link href="https://github.com/Cougargriff/ResumeLatex/raw/master/resume_curr.pdf">
                <Button ml={2} variant='primary' className="contents"
                    sx={{
                    backgroundColor: '#77dd77',
                    ':hover': {
                    backgroundColor: 'green',}
                    
                }}>Download
                </Button>
            </Link>
            
        </TwoColumnContent>
        <StyledImage src={resume}></StyledImage>
      </div>
    )
}

export default Resume;