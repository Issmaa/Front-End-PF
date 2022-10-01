import {
  GET_ALL_EXCURSION,
  GET_ALL_PACKS,
  GET_ALL_HOTEL,
  GET_PACK_BY_ID,
} from "./actionsTypes";
import { CREATE_USER, GET_CURRENT_USER } from "./actionsTypes";

const axios = require("axios");

export function getHotels() {
  return (dispatch) => {
    axios("http://localhost:5000/Hotel")
      .then((res) => dispatch({ type: GET_ALL_HOTEL, payload: res.data }))
      .catch((error) => console.log(error));
  };
}

export function getExcursiones() {
  return (dispatch) => {
    axios("http://localhost:5000/excursiones")
      .then((res) => dispatch({ type: GET_ALL_EXCURSION, payload: res.data }))
      .catch((error) => console.log(error));
  };
}

// export const createUser = (payload) => async (dispatch) => {
//   const newUser = axios.post("http://localhost:5000/signup", payload);
//   dispatch({ type: CREATE_USER, payload: newUser });
// };

export const getCurrentUser = (obj) => (dispatch) => {
  return dispatch({ type: GET_CURRENT_USER, payload: obj });
};

export const getPackById = (id) => async (dispatch) => {
  let pack = await axios.get(`http://localhost:5000/packs/${id}`);
  return dispatch({ type: GET_PACK_BY_ID, payload: pack });
};
