import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ColorButton from "./ColorButton";
import { Title } from "./TextBox";
import { NColumnContent } from "./Containers";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import {
  setEditorText,
  setEditorTitle,
  clearEditor,
} from "../store/actions/EditorActions";
import {
  createPost,
  fetchPost,
  updatePost,
} from "../store/actions/PostActions";

const mdParser = new MarkdownIt({ html: true } /* Markdown-it options */);

const EditorContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  ${(props) => "width: " + props.width}
`;

const EditButtonContainer = styled.div`
  padding: 20px;
  width: 100%;
`;

const TitleInput = styled.input`
  width: 400px;
  text-align: center;
  height: 60px;
  margin-bottom: 60px;
  font-size: 30px;
`;

const TopBar = styled.div`
  padding-top: 20px;
  width: 100%;
`;

const EditorStyle = {
  height: "800px",
  width: "100%",
};

const EditorTitle = "Markdown Editor";

const EditButtons = (props) => {
  const dispatch = useDispatch();
  return (
    <EditButtonContainer>
      {props.id ? (
        <NColumnContent paddingLeft="0px">
          <ColorButton
            paddingLeft="0px"
            onClick={() => {
              dispatch(updatePost());
            }}
            color="#b19cd9"
            text="Update"
          />
          <ColorButton
            href="/blog"
            color="#b19cd9"
            text="Done"
            onClick={() => {
              dispatch(clearEditor());
            }}
          />
        </NColumnContent>
      ) : (
        <NColumnContent paddingLeft="0px">
          <ColorButton
            paddingLeft="0px"
            onClick={() => {
              dispatch(createPost());
            }}
            color="#779ECB"
            text="Submit"
          />
        </NColumnContent>
      )}
    </EditButtonContainer>
  );
};

const cleanup = (dispatch) => () => {
  dispatch(clearEditor());
};

function NavButtons() {
  const dispatch = useDispatch();
  return (
    <TopBar>
      <NColumnContent>
        <ColorButton
          href="/"
          color="#F18E33"
          text="Portfolio"
          onClick={cleanup(dispatch)}
        />
        <ColorButton
          color="#53DC98"
          text="Blog"
          href="/blog"
          onClick={cleanup(dispatch)}
        />
        <ColorButton
          color="#FF0000"
          text="Admin"
          href="/admin"
          onClick={cleanup(dispatch)}
        />
      </NColumnContent>
    </TopBar>
  );
}

const EditorWindow = () => {
  //const [md, setMd] = useState("");
  const dispatch = useDispatch();
  const md = useSelector((state) => state.EditorReducer.text);
  const updateError = useSelector(
    (state) => state.EditorReducer.updateTextError
  );

  return (
    <MdEditor
      value={md}
      style={EditorStyle}
      renderHTML={(text) => mdParser.render(text)}
      onChange={({ html, text }) => {
        if (md !== text) {
          dispatch(setEditorText(text));
        }
      }}
    />
  );
};

function Editor({ match }) {
  const isAdmin = useSelector((state) => state.EditorReducer.isAdmin);
  const title = useSelector((state) => state.EditorReducer.title);
  const dispatch = useDispatch();
  const id = match.params.id;

  /* Whether to clear the editor or load a post to edit */
  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    } else {
      dispatch(clearEditor());
    }
  }, []);

  return isAdmin ? (
    <EditorContainer>
      <NavButtons />
      <Title className="headers">{EditorTitle}</Title>
      <TitleInput
        placeholder="Title"
        value={title}
        onChange={(text) => {
          dispatch(setEditorTitle(text.target.value));
        }}
      />
      <EditorContainer width="90%">
        <EditorWindow />
        <EditButtons id={id} />
      </EditorContainer>
    </EditorContainer>
  ) : (
    <EditorContainer>
      <Title className="headers">You are not an Admin</Title>
    </EditorContainer>
  );
}

export default Editor;
