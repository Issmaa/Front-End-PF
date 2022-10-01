import { CREATE_USER, GET_ALL_HOTEL } from "./actionsTypes";
const axios = require("axios");

export function getHotels() {
  return (dispatch) => {
    axios("http://localhost:5000/Hotel")
      .then((res) => dispatch({ type: GET_ALL_HOTEL, payload: res.data }))
      .catch((error) => console.log(error));
  };
}

export const createUser = (payload) => async (dispatch) => {
  const newUser = axios.post("http://localhost:5000/signup", payload);
  dispatch({ type: CREATE_USER, payload: newUser });
};
