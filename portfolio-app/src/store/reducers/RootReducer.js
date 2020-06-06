import { combineReducers } from "redux";
import ProjectReducer from './ProjectReducer';

const RootReducer = combineReducers({
  ProjectReducer,
});

export default RootReducer;