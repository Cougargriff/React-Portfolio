import {
  UPDATE_EDITOR_ERROR,
  UPDATE_EDITOR_TEXT,
  UPDATE_EDITOR_TITLE,
  CLEAR_TEXT,
  ADMIN_SIGN_IN_REQUEST,
  ADMIN_SIGN_IN_SUCCESS,
  ADMIN_SIGN_IN_FAILURE,
  ADMIN_SIGN_OUT_REQUEST,
  ADMIN_SIGN_OUT_SUCCESS,
  ADMIN_SIGN_OUT_FAILURE
} from "./Types";
import { Auth } from "../../Firebase.js";
import { clearEditing } from "./PostActions";

/*
    Action types for reducers to ... reduce
*/
const updateText = (text) => {
  return {
    type: UPDATE_EDITOR_TEXT,
    text
  }
}

const updateTitle = (title) => {
  return {
    type: UPDATE_EDITOR_TITLE,
    title
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

const adminSignInRequest = () => {
  return {
    type: ADMIN_SIGN_IN_REQUEST
  }
}

const adminSignInSuccess = () => {
  return {
    type: ADMIN_SIGN_IN_SUCCESS
  }
}

const adminSignInFailure = (err) => {
  return {
    type: ADMIN_SIGN_IN_FAILURE,
    err
  }
}

const adminSignOutRequest = () => {
  return {
    type: ADMIN_SIGN_OUT_REQUEST
  }
}

const adminSignOutSuccess = () => {
  return {
    type: ADMIN_SIGN_OUT_SUCCESS
  }
}

const adminSignOutFailure = (err) => {
  return {
    type: ADMIN_SIGN_OUT_FAILURE,
    err
  }
}


/* 
    Action creator function to call from component class
    to dispatch recieved projects action after async api call.
*/
export const clearEditor = () => (dispatch) => {
  dispatch(clearText())
  dispatch(clearEditing())
}

export const setEditorText = (text) => async (dispatch) => {
  dispatch(updateText(text));
};

export const setEditorTitle = (title) => async (dispatch) => {
  dispatch(updateTitle(title));
}

export const adminSignIn = (email, psw) => async (dispatch) => {
  dispatch(adminSignInRequest())
  /*
    Sign in with email password using Firebase Auth
  */
  try {
    const res = await Auth.signInWithEmailAndPassword(email, psw)
    console.log(res)
    dispatch(adminSignInSuccess())
  } catch (err) {
    dispatch(adminSignInFailure(err))
  }
}

export const adminSignOut = (email, psw) => async (dispatch) => {
  dispatch(adminSignOutRequest())
  /*
    Sign in with email password using Firebase Auth
  */
  try {
    const res = await Auth.signOut()
    console.log(res)
    dispatch(adminSignOutSuccess())
  } catch (err) {
    dispatch(adminSignOutFailure(err))
  }
}
