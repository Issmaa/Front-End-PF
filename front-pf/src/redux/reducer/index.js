import {
  GET_ALL_PACKS,
  GET_ALL_HOTEL,
  GET_ALL_EXCURSION,
  GET_CURRENT_USER,

} from "../actions/actionsTypes";

const initialState = {
  hotels: [],
  excursiones: [],
  currentUser: {},
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

