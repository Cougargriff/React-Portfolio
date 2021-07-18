import {
    CHANGE_THEME,
    UPDATE_THEME,
    FETCH_THEMES
} from "./Types";

/* 
 * Examples for further development 
 * Updating / Changing themes...
 * */

/*
    Action types for reducers to ... reduce
*/
const fetchThemes = () => {
  return {
    type: FETCH_THEMES
  }
}

const changeTheme = (newTheme) => {
    return {
        type: CHANGE_THEME,
        newTheme
    }
}

/* 
    Action creator function to call from component class
    to dispatch recieved projects action after async api call.
*/
// export const clearEditor = () => (dispatch) => {
//   dispatch(clearText())
//   dispatch(clearEditing())
// }
//
export const getThemes = () => (dispatch) => {
    dispatch(fetchThemes());
};

export const swapTheme = (newTheme) => (dispatch) => {
    dispatch(changeTheme(newTheme));
};

// export const setEditorText = (text) => async (dispatch) => {
//   dispatch(updateText(text));
// };

