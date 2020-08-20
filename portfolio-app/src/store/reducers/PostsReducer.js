import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from "../actions/Types";

const initPoststState = {
  isFetchingPosts: false,
  fetchPostsError: false,
  fetchedPosts: false,
  posts: [],
};

const postsReducer = (state = initPoststState, action) => {
  switch (action.type) {
    /*
            On each parsed action request type, the reducer will return the
            new modified state. The spread operator '...' will return the insides of the old
            state which we then append our corresponding changed state values to. Altogether returning
            a new state object. 
        */
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetchingPosts: false,
        fetchPostsError: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetchingPosts: false,
        fetchedPosts: true,
        posts: action.posts,
      };
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetchingProjects: true,
        fetchPostsError: false,
      };
    default:
      return state;
  }
};

export default postsReducer;