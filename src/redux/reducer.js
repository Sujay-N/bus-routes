
import { ADD_CITY, ADD_DETAILS } from './actionType';
    


const initialState = {
    bookings : [{date:"28/05/2020",time:"23:30",src:"Bangalore",dst:"Coimbatore",cityName:"Bangalore",tripStart:"false"}],
    cityNames :["Bangalore","Coimbatore"]

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

    default:
        return state
    }
}
