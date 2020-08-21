import {
  UPDATE_EDITOR_ERROR,
  UPDATE_EDITOR_TEXT
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

/* 
    Action creator function to call from component class
    to dispatch recieved projects action after async api call.
*/

export const setEditorText = (text, html) => async (dispatch) => {
  dispatch(updateText(text, html));
};