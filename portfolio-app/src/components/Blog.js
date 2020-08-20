/*
    src/components/Projects.js
*/
import resume from '../res/resume_curr-1.jpg';
import React from 'react';
import styled from 'styled-components';
import ColorButton from './ColorButton';
import {
  Title
} from './TextBox'
import { 
  NColumnContent,
  TopSection
} from './Containers'



function Resume(props) {
    return (
      <div>
        <NColumnContent>
          <ColorButton  
          href="/"
          color='#F18E33'
          text='Back to Portfolio'
        /> 
        </NColumnContent>
        <TopSection>
          <Title className="headers"> 
            Welcome to me blog
          </Title>
        </TopSection>
      </div>
    )
}

export default Resume;