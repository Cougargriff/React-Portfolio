import {
    CHANGE_THEME,
    UPDATE_THEME,
    FETCH_THEMES
} from "../actions/Types";
import themes from '../../components/Styling/themes.js';

const initProjectState = {
    themes: themes,
    selected: 'default',
    theme: themes['default']
};

const themeReducer = (state = initProjectState, action) => {
  switch (action.type) {
    /*
            On each parsed action request type, the reducer will return the
            new modified state. The spread operator '...' will return the insides of the old
            state which we then append our corresponding changed state values to. Altogether returning
            a new state object. 
        */
    case FETCH_THEMES:
      return {
        ...state,
      };
    case CHANGE_THEME:
      return {
        ...state,
        selected: action.newTheme || initProjectState.selected,
        theme: themes[action.newTheme] || initProjectState.theme,
      };
    case UPDATE_THEME:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default themeReducer;
