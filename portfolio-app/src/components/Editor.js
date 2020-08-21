import React, { useState } from 'react';
import styled from 'styled-components';
import ColorButton from './ColorButton';
import { Title } from './TextBox'
import { NColumnContent } from './Containers'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt({html: true}/* Markdown-it options */);



const EditorContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex-box;
`

const EditButtonContainer = styled.div`
  padding: 20px;
  width: 100%;
`

const EditorStyle = {
  height: "800px",
  width: "100%"
}

const EditorTitle = "Markdown Editor"


const EditButtons = () => {
  return (
    <EditButtonContainer>
      <ColorButton
        //onClick={postSubmit}
        color='#779ECB'
        text='Submit'
      /> 
    </EditButtonContainer>
  )
}

const postSubmit = () => {
  console.log("Submitting post -> ")
}

function BackButton() {
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

const EditorWindow = () => {
  const [md, setMd] = useState("");

  return (
    <MdEditor
      value={md}
      style={EditorStyle}
      renderHTML={(text) => mdParser.render(text)}
      onChange={({html, text}) => {    
        console.log('handleEditorChange', html, md)
        setMd(text)
      }}
    />
  )
}

function Editor(props) {

  

  
  

    return (
      <EditorContainer>
        <BackButton/>
        <Title className="headers"> 
            {EditorTitle}
        </Title>
        <EditorWindow/>
        <EditButtons/>
      </EditorContainer>
    )
}

export default Editor