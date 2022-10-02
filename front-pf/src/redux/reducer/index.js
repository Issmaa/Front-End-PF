import { ActionTypes } from "@mui/base";
import {
  GET_ALL_PACKS,
  GET_ALL_HOTEL,
  GET_ALL_EXCURSION,
  GET_CURRENT_USER,
  GET_PACK_BY_ID,
  USER_LOGIN,
  USER_LOGOUT,
} from "../actions/actionsTypes";

const initialState = {
  hotels: [],
  packs: [],
  excursiones: [],
  currentUser: {},
  loginAccess: {},
  packById: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HOTEL:
      return {
        ...state,
        hotels: action.payload,
      };

    case GET_ALL_EXCURSION:
      return {
        ...state,
        excursiones: action.payload,
      };
    case GET_CURRENT_USER:
      console.log(state);
      return {
        ...state,
        currentUser: action.payload,
      };
    case GET_PACK_BY_ID:
      return {
        ...state,
        packById: action.payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        loginAccess: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        loginAccess: {}
      }
    default:
      return {
        ...state,
      };
  }
};
