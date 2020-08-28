import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import ColorButton from './ColorButton';
import Posts from './Posts'
import { Title } from './TextBox'
import { NColumnContent } from './Containers'

const BlogContainer = styled.div`
  position: absolute;
  width: 100%;
`
const TopBar = styled.div`
  padding-top: 20px;
  width: 100%;
`

const BlogWelcome = "Welcome to my blog !"

function BlogButtons() {
  const isAdmin = useSelector((state) => state.EditorReducer.isAdmin);

  return (
    <TopBar>
      <NColumnContent>
          <ColorButton  
            href="/"
            color='#F18E33'
            text='Portfolio'
          /> 
          { isAdmin ? <ColorButton
          color='#779ECB'
          text="Editor"
          href="/admin-editor"
        /> : undefined }
      </NColumnContent>
    </TopBar>
  )
}

function Blog(props) {
    return (
      <BlogContainer>
        <BlogButtons/>
          <Title className="headers" changeFontAt="700px" changeFontTo="40px"> 
            {BlogWelcome}
          </Title>
          <Posts/>
      </BlogContainer>
    )
}

export default Blog;