import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from "./Types";

/*
    Action types for reducers to ... reduce
*/
const requestPosts = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

const receivePosts = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts,
  };
};

const postsError = () => {
  return {
    type: FETCH_POSTS_FAILURE,
  };
};


const POSTS_URL = "http://deno-blog-api.herokuapp.com/posts";

/* 
    Action creator function to call from component class
    to dispatch recieved projects action after async api call.
*/

const getPosts = async () => {
  return await fetch(POSTS_URL)
  .then(res => res.json())
}

export const fetchPosts = () => async (dispatch) => {
  dispatch(requestPosts());
  try {
    let posts = await getPosts();
    dispatch(receivePosts(posts));
  } catch (error) {
    console.log("Caught error while fetching posts:\n",error)
    dispatch(postsError())
  }
  
};