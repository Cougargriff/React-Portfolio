import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import RootReducer from "./reducers/RootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (persistedState) => {
  const store = createStore(
    RootReducer,
    persistedState,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
  );
  return store;
};

export default configureStore;