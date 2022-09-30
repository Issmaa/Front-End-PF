import { GET_ALL_PACKS,GET_ALL_HOTEL } from "./actionsTypes";
const axios = require ('axios');

export function getHotels(){
    return (dispatch) => {
        axios('http://localhost:5000/Hotel')
        .then(res => dispatch({type: GET_ALL_HOTEL, payload: res.data}))
        .catch(error => console.log(error))
    }
}