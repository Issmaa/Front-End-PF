import {
  GET_ALL_PACKS,
  GET_ALL_HOTEL,
  GET_CURRENT_USER,
} from "../actions/actionsTypes";

const initialState = {
  hotels: [],
  currentUser: {},
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HOTEL:
    //   console.log(action.payload);
      return {
        ...state,
        hotels: action.payload,
      };
    case GET_CURRENT_USER:
        console.log(state)
      return {
        ...state,
        currentUser: action.payload,
      };
      default:
          return {
              ...state,
            };
        }
    };