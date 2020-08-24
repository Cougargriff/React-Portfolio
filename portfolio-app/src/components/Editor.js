import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import ColorButton from './ColorButton';
import { Title } from './TextBox'
import { NColumnContent } from './Containers'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import { setEditorText } from '../store/actions/EditorActions';
import { createPost } from '../store/actions/PostActions';

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
  const dispatch = useDispatch();
  return (
    <EditButtonContainer>
      <ColorButton
        onClick={() => {
          dispatch(createPost())
        }}
        color='#779ECB'
        text='Submit'
      /> 
    </EditButtonContainer>
  )
}

function BackButton() {
  return (
      <NColumnContent>
            <ColorButton  
            href="/"
            color='#F18E33'
            text='Portfolio'
          />
          <ColorButton
          color='#53DC98'
          text="Blog"
          href="/blog"
        />
        <ColorButton
          color='#FF0000'
          text="Admin"
          href="/admin"
        />  
      </NColumnContent>
  )
}

const EditorWindow = () => {
  //const [md, setMd] = useState("");
  const dispatch = useDispatch();
  const md = useSelector(state => state.EditorReducer.text)
  const updateError = useSelector(state => state.EditorReducer.updateTextError)
  

  return (
    <MdEditor
      value={md}
      style={EditorStyle}
      renderHTML={(text) => mdParser.render(text)}
      onChange={({html, text}) => {    
        dispatch(setEditorText(text, html))
      }}
    />
  )
}

function Editor(props) {

  const isAdmin = useSelector((state) => state.EditorReducer.isAdmin);
  
    return isAdmin ? (
      <EditorContainer>
        <BackButton/>
        <Title className="headers"> 
            {EditorTitle}
        </Title>
        <EditorWindow/>
        <EditButtons/>
      </EditorContainer>
    ) : (
      <EditorContainer>
        <Title className="headers"> 
            You are not an Admin
        </Title>
      </EditorContainer>
    )
}

export default Editor