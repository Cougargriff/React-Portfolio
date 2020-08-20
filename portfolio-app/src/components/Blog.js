import React from 'react';
import styled from 'styled-components';
import ColorButton from './ColorButton';
import Posts from './Posts'
import { Title } from './TextBox'
import { NColumnContent } from './Containers'

const BlogContainer = styled.div`
  position: absolute;
  width: 100%;
`
const BlogWelcome = "Welcome to my blog !"

function BlogButtons() {
  return (
      <NColumnContent>
            <ColorButton  
            href="/"
            color='#F18E33'
            text='Back to Portfolio'
          /> 
      </NColumnContent>
  )
}

function Blog(props) {
    return (
      <BlogContainer>
        <BlogButtons/>
          <Title className="headers"> 
            {BlogWelcome}
          </Title>
          <Posts/>
      </BlogContainer>
    )
}

export default Blog;