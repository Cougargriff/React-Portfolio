import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  UPDATE_POST_SUCCESS,
  CLEAR_EDIT_ID,
  CLEAR_SELECTED_POST,
} from "../actions/Types";

const initPostsState = {
  isFetchingPosts: false,
  fetchPostsError: false,
  fetchedPosts: false,
  posts: [],
  editingId: "",
  selectedPost: {},
  fetchPostError: false,
  isFetchingPost: false,
  fetchedPost: false,
};

const postsReducer = (state = initPostsState, action) => {
  switch (action.type) {
    /*
            On each parsed action request type, the reducer will return the
            new modified state. The spread operator '...' will return the insides of the old
            state which we then append our corresponding changed state values to. Altogether returning
            a new state object. 
        */
    case CLEAR_EDIT_ID:
      return {
        ...state,
        editingId: "",
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
      };
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
      /* For updating single post */
    case FETCH_POST_FAILURE:
      return {
        ...state,
        isFetchingPost: false,
        fetchPostError: true,
      };
    case FETCH_POST_SUCCESS:
      console.log(action.post);
      return {
        ...state,
        isFetchingPost: false,
        fetchedPost: true,
        editingId: action.id,
        selectedPost: action.post,
      };
    case FETCH_POST_REQUEST:
      return {
        ...state,
        isFetchingPosts: true,
        fetchPostError: false,
      };
    case CLEAR_SELECTED_POST:
      return {
        ...state,
        selectedPost: {},
        fetchedPost: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
