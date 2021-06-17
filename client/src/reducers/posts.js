/* eslint-disable import/no-anonymous-default-export */
import * as actions from "../actions/actionTypes";

export default function reducer(
  state = { isLoading: true, posts: [] },
  action
) {
  switch (action.type) {
    case actions.startLoading:
      return {
        ...state,
        isLoading: true,
      };
    case actions.endLoading:
      return {
        ...state,
        isLoading: false,
      };
    case actions.fetchAll:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };

    case actions.fetchPost:
      return {
        ...state,
        post: action.payload,
      };
    case actions.fetchBySearch:
      return {
        ...state,
        posts: action.payload,
      };
    case actions.createPost:
      return { ...state, posts: [action.payload, ...state.posts] };
    case actions.updatePost:
    case actions.likePost:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case actions.deletePost:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
}
