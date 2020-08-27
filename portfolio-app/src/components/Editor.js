import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import ColorButton from './ColorButton';
import { Title } from './TextBox'
import { NColumnContent } from './Containers'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import { setEditorText, setEditorTitle } from '../store/actions/EditorActions';
import { createPost } from '../store/actions/PostActions';

const mdParser = new MarkdownIt({html: true} /* Markdown-it options */);

const EditorContainer = styled.div`
  align-items: center; 
  display: flex;
  flex-direction: column;
`

const EditButtonContainer = styled.div`
  padding: 20px;
  width: 100%;
`

const TitleInput = styled.input`
  width: 400px;
  text-align: center;
  height: 60px;
  margin-bottom: 60px;
  font-size: 30px;
`

const TopBar = styled.div`
  padding-top: 20px;
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

function NavButtons() {
  return (
    <TopBar>
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
    </TopBar>
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
  const title = useSelector(state => state.EditorReducer.title)
  const dispatch = useDispatch();

    return isAdmin ? (
      <EditorContainer>
        <NavButtons />
        <Title className="headers"> 
            {EditorTitle}
        </Title>
        <TitleInput 
          placeholder="Title"
          value={title}
          onChange={(text) => {
            dispatch(setEditorTitle(text.target.value));
          }}
        />
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