import { ActionTypes } from "@mui/base";
import {
  GET_ALL_PACKS,
  GET_ALL_HOTEL,
  GET_ALL_EXCURSION,
  GET_CURRENT_USER,
  GET_PACK_BY_ID,
} from "../actions/actionsTypes";

const initialState = {
  hotels: [],
  packs: [],
  excursiones: [],
  currentUser: {},
  packById: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HOTEL:
      console.log(action.payload);
      //   console.log(action.payload);
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
    default:
      return {
        ...state,
      };
  }
};
