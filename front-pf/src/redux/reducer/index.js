import {
  GET_ALL_PACKS,
  GET_ALL_HOTEL,
  GET_ALL_EXCURSION,
} from "../actions/actionsTypes";

const initialState = {
  hotels: [],
  excursiones: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HOTEL:
      console.log(action.payload);
      return {
        ...state,
        hotels: action.payload,
      };
    default:
      return {
        ...state,
      };
    case GET_ALL_EXCURSION:
      return {
        ...state,
        excursiones: action.payload,
      };
  }
};
