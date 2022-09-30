import { GET_ALL_PACKS,GET_ALL_HOTEL } from "../actions/actionsTypes";


const initialState = {
    hotels: []
}


export const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_ALL_HOTEL:
            console.log(action.payload)
            return {
                ...state,
                hotels: action.payload
            }
        default: 
            return {
                ...state,
            }
    }
}