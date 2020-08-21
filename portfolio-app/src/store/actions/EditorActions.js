import {
  UPDATE_EDITOR_ERROR,
  UPDATE_EDITOR_TEXT,
  CLEAR_TEXT
} from "./Types";

/*
    Action types for reducers to ... reduce
*/
const updateText = (text, html) => {
  return {
    type: UPDATE_EDITOR_TEXT,
    text,
    html
  }
}

const editorError = () => {
  return {
    type: UPDATE_EDITOR_ERROR
  }
}

const clearText = () => {
  return {
    type: CLEAR_TEXT
  }
}

/* 
    Action creator function to call from component class
    to dispatch recieved projects action after async api call.
*/
export const clearEditor = () => (dispatch) => {
  dispatch(clearText())
}

export const setEditorText = (text, html) => async (dispatch) => {
  dispatch(updateText(text, html));
};
