import {
  UPDATE_EDITOR_TEXT,
  UPDATE_EDITOR_ERROR,
  CLEAR_TEXT,
  ADMIN_SIGN_IN_SUCCESS,
  ADMIN_SIGN_OUT_SUCCESS,
  UPDATE_EDITOR_TITLE
} from "../actions/Types";

const initEditorState = {
  updateTextError: false,
  isAdmin: false,
  text: "",
  html: "",
  title: ""
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
    case UPDATE_EDITOR_TITLE:
      return {
        ...state,
        title: action.title
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
        html: "",
        title: ""
      }
    case ADMIN_SIGN_IN_SUCCESS:
      return {
        ...state,
        isAdmin: true
      }
    case ADMIN_SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAdmin: false
      }
    default:
      return state;
  }
};

export default editorReducer;