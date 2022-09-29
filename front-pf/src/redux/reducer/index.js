import { GET_ALL_PACKS } from "../actions/actionsTypes";


const initialState = {
    
}


export const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        default: 
            return {
                ...state
            }
    }
}