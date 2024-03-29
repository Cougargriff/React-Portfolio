import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  CLEAR_EDIT_ID,
  CLEAR_SELECTED_POST
} from "./Types";

import axios from "axios";
import { clearEditor, setEditorText, setEditorTitle } from "./EditorActions";
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
    type: FETCH_POST_FAILURE,
  };
};

const requestPost = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

const receivePost = (id, post) => {
  return {
    type: FETCH_POST_SUCCESS,
    id,
    post
  };
};

const postError = () => {
  return {
    type: FETCH_POST_FAILURE,
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

const deletePostRequest = () => {
  return {
    type: DELETE_POST_REQUEST
  }
}

const deletePostSuccess = () => {
  return {
    type: DELETE_POST_SUCCESS
  }
}

const deletePostFailure = (err) => {
  return {
    type: DELETE_POST_FAILURE,
    err
  }
}

const updatePostRequest = () => {
  return {
    type: UPDATE_POST_REQUEST
  }
}

const updatePostSuccess = () => {
  return {
    type: UPDATE_POST_SUCCESS
  }
}

const updatePostFailure = (err) => {
  return {
    type: UPDATE_POST_FAILURE,
    err
  }
}


const clearEditId = () => {
  return {
    type: CLEAR_EDIT_ID
  }
}

const POSTS_URL = "https://fp-blog-api.herokuapp.com/api/v1/posts";


/* 
    Action creator function to call from component class
    to dispatch recieved projects action after async api call.
*/

const getPosts = async () => {
    return await fetch(POSTS_URL, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })
  .then(res => res.json())
}

const getPost = async (id) => {
    return await fetch(POSTS_URL + `/${id}`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })
  .then(res => res.json())
}

const makePost = async (post) => {
  var params = new URLSearchParams();
  params.append('title', post.title);
  params.append('content', post.content);
  return axios.post(POSTS_URL,
    params,
    { headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'

        }
    }
  )
}

const removePost = async (id) => {
  return axios.delete(POSTS_URL + `/${id}`)
}

const editPost = async (post) => {
  var params = new URLSearchParams();
  params.append('title', post.title);
  params.append('content', post.content);
  return axios.put(POSTS_URL + `/${post.id}`,
    params,
    { headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'

        }
    }
  )
}
export const clearEditing = (id) => async (dispatch) => { 
  dispatch(clearEditId())
}

export const deletePost = (id) => async (dispatch) => {
  dispatch(deletePostRequest())
  try {
    const res = await removePost(id)
    dispatch(deletePostSuccess())
    dispatch(fetchPosts())
  } catch (err) {
    dispatch(deletePostFailure(err))
  }
}

export const updatePost = () => async (dispatch, getState) => {
  dispatch(updatePostRequest())
  try {
    const text = getState().EditorReducer.text
    if(!text) {
      throw "Can't create empty post"
    }
    const title = getState().EditorReducer.title
    if(!title) {
      throw "Post needs title"
    }

    const id = getState().PostsReducer.editingId
    if(!id) {
      throw "No post selected to edit"
    }

    const res  = await editPost({
      id: id,
      title: title,
      content: text
    })
    dispatch(updatePostSuccess())
  } catch (err) {
    dispatch(updatePostFailure(err))
  }
}

export const createPost = () => async (dispatch, getState) => {
  dispatch(createPostRequest())
  try {
    const text = getState().EditorReducer.text
    if(!text) {
      throw "Can't create empty post"
    }
    const title = getState().EditorReducer.title
    if(!title) {
      throw "Post needs title"
    }
    const response = await makePost({
      title: title,
      content: text
    })
    dispatch(createPostSuccess())
    dispatch(clearEditor())
  } catch (err) {
    dispatch(createPostFailure(err))
  }
}

export const fetchPost = (id) => async (dispatch) => {
  dispatch(requestPost());
  try {
    let post = await getPost(id);
    dispatch(receivePost(post.id.toString(), post));
    dispatch(setEditorText(post.content))
    dispatch(setEditorTitle(post.title))
  } catch (error) {
    console.log("Caught error while fetching posts:\n",error)
    dispatch(postsError())
  }
}

const clearSelection = () => {
  return {
    type: CLEAR_SELECTED_POST
  }
}

export const clearSelectedPost = () => async (dispatch) => {
  dispatch(clearSelection())
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
