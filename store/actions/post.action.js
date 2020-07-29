import * as types from "../types";
export const fetchposts = () => async (dispatch) => {
  // const data = await axios.get(api)
  dispatch({
    type: types.GET_POSTS,
    //payload is data respon from server
    payload: ["1", "2", "3"],
  });
};
