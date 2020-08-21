import {
  UPDATE_EDITOR_TEXT,
  UPDATE_EDITOR_ERROR,
  CLEAR_TEXT
} from "../actions/Types";

const initEditorState = {
  updateTextError: false,
  text: "",
  html: ""
};

const editorReducer = (state = initEditorState, action) => {
  switch (action.type) {
    /*
            On each parsed action request type, the reducer will return the
            new modified state. The spread operator '...' will return the insides of the old
            state which we then append our corresponding changed state values to. Altogether returning
            a new state object. 
        */
    case UPDATE_EDITOR_TEXT:
      return {
        ...state,
        text: action.text,
        html: action.html
      }
    case UPDATE_EDITOR_ERROR:
      return {
        ...state,
        updateTextError: true
      }
    case CLEAR_TEXT:
      return {
        ...state,
        text: "",
        html: ""
      }
    default:
      return state;
  }
};

export default editorReducer;