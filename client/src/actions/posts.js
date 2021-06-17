import * as api from "../api";
import * as actions from "./actionTypes";

//get post
export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.startLoading });
    const { data } = await api.fetchPost(id);
    dispatch({ type: actions.fetchPost, payload: data });
    dispatch({ type: actions.endLoading });
  } catch (error) {
    if (error.response) {
      dispatch({ type: actions.error, payload: error.response.data.message });
    }
  }
};

// get all post
export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: actions.startLoading });
    const { data } = await api.fetchPosts(page);
    dispatch({ type: actions.fetchAll, payload: data });
    dispatch({ type: actions.endLoading });
  } catch (error) {
    if (error.response) {
      dispatch({ type: actions.error, payload: error.response.data.message });
    }
  }
};

//get post by search
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: actions.startLoading });
    const { data } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: actions.fetchBySearch, payload: data });
    dispatch({ type: actions.endLoading });
  } catch (error) {
    if (error.response) {
      dispatch({ type: actions.error, payload: error.response.data.message });
    }
  }
};

//create posts
export const createPosts = (post) => async (dispatch) => {
  try {
    dispatch({ type: actions.startLoading });
    const { data } = await api.createPosts(post);

    dispatch({ type: actions.createPost, payload: data });
    dispatch({ type: actions.endLoading });
  } catch (error) {
    if (error.response) {
      dispatch({ type: actions.error, payload: error.response.data.message });
    }
  }
};

// update post
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: actions.updatePost, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({ type: actions.error, payload: error.response.data.message });
    }
  }
};

// delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: actions.deletePost, payload: id });
  } catch (error) {
    if (error.response) {
      dispatch({ type: actions.error, payload: error.response.data.message });
    }
  }
};

// like post
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: actions.likePost, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({ type: actions.error, payload: error.response.data.message });
    }
  }
};
