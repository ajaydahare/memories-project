import * as actions from "./actionTypes";
import * as api from "../api/index.js";

// user sign in
export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: actions.auth, payload: data });
    history.push("/");
  } catch (error) {
    if (error.response) {
      dispatch({ type: actions.error, payload: error.response.data.message });
    }
  }
};

// user sign up
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: actions.auth, payload: data });
    history.push("/");
  } catch (error) {
    if (error.response) {
      dispatch({ type: actions.error, payload: error.response.data.message });
    }
  }
};
