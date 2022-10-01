import { CREATE_USER, GET_ALL_HOTEL, GET_CURRENT_USER } from "./actionsTypes";
const axios = require("axios");

export function getHotels() {
  return (dispatch) => {
    axios("http://localhost:5000/Hotel")
      .then((res) => dispatch({ type: GET_ALL_HOTEL, payload: res.data }))
      .catch((error) => console.log(error));
  };
}

// export const createUser = (payload) => async (dispatch) => {
//   const newUser = axios.post("http://localhost:5000/signup", payload);
//   dispatch({ type: CREATE_USER, payload: newUser });
// };

export const getCurrentUser = (obj) => (dispatch) => {
  dispatch({ type: GET_CURRENT_USER, payload: obj });
};
