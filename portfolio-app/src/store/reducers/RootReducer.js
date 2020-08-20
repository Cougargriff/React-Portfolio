import { combineReducers } from "redux";
import ProjectReducer from './ProjectReducer';
import PostsReducer from './PostsReducer'

const RootReducer = combineReducers({
  ProjectReducer, PostsReducer
});

export default RootReducer;