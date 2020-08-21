import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE
} from "./Types";

import axios from "axios";
import { clearEditor } from "./EditorActions";
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

const createPostRequest = () => {
  return {
    type: CREATE_POST_REQUEST
  }
}

const createPostSuccess = () => {
  return {
    type: CREATE_POST_SUCCESS
  }
}

const createPostFailure = (err) => {
  return {
    type: CREATE_POST_FAILURE,
    err
  }
}


const POSTS_URL = "http://deno-blog-api.herokuapp.com/posts";

/* 
    Action creator function to call from component class
    to dispatch recieved projects action after async api call.
*/

const getPosts = async () => {
  return await fetch(POSTS_URL)
  .then(res => res.json())
}

const makePost = async (post) => {
  var params = new URLSearchParams();
                params.append('title', post.title);
                params.append('content', post.content);
  return axios.post(POSTS_URL,
    params,
    { headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
  )
}

export const createPost = () => async (dispatch, getState) => {
  dispatch(createPostRequest())
  try {
    const html = getState().EditorReducer.html
    if(!html) {
      throw "Can't create empty post"
    }
    const title = "Test Create with Editor"
    const response = await makePost({
      title: title,
      content: html
    })
    console.log(response);
    dispatch(createPostSuccess())
    dispatch(clearEditor())
  } catch (err) {
    dispatch(createPostFailure(err))
  }
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