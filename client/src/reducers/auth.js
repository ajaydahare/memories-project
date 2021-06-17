import * as actions from "../actions/actionTypes";

const authReducer = (state = { authData: null, error: null }, action) => {
  switch (action.type) {
    case actions.auth:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };
    case actions.logout:
      localStorage.clear();
      return { ...state, authData: null };
    case actions.error:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
