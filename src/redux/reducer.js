
import { ADD_CITY, ADD_DETAILS,SET_PER_PAGE,SET_CURR_PAGE,DELETE_BUS } from './actionType';

import uuid from "uuid-random";
    


const initialState = {
    bookings : [{date:"28/05/2020",time:"23:30",src:"Bangalore",dst:"Coimbatore",cityName:"Bangalore",tripStart:"false",key:uuid()},],
    cityNames :["Bangalore","Coimbatore"],
    currentPage: 1,
    perPage: 5

}

export default (state = initialState, action) => {
    switch (action.type) {

    case ADD_DETAILS:
        return { ...state,
            bookings: [...state.bookings, action.payload] }

    case ADD_CITY :
        return {
            ...state,
            cityNames : [...state.cityNames,action.payload]
        }
    case SET_PER_PAGE:
            return {
                ...state,
                perPage: action.payload
            }
    case SET_CURR_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
    case DELETE_BUS:
                return {
                    ...state,
                    bookings: state.bookings.filter((ele) => ele.id !== action.payload)
                }

    default:
        return state
    }
}
