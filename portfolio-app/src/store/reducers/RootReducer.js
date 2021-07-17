import { combineReducers } from "redux";
import ProjectReducer from './ProjectReducer';
import PostsReducer from './PostsReducer';
import EditorReducer from './EditorReducer';
import ThemeReducer from './ThemeReducer';


const RootReducer = combineReducers({
  ProjectReducer, PostsReducer, EditorReducer, ThemeReducer
});

export default RootReducer;
