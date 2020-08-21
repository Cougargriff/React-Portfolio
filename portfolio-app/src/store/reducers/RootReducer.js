import { combineReducers } from "redux";
import ProjectReducer from './ProjectReducer';
import PostsReducer from './PostsReducer'
import EditorReducer from './EditorReducer'

const RootReducer = combineReducers({
  ProjectReducer, PostsReducer, EditorReducer
});

export default RootReducer;