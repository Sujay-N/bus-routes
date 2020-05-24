
 import { ADD_CITY,ADD_DETAILS } from './actionType';

 


const add = (payload) => {
	console.log(payload);
	return {
		type: ADD_DETAILS,
		payload
    };
};

const addCity = (payload) => {
    console.log(payload)
    return {
        type:ADD_CITY,
        payload
    }
}
 export {add,addCity};
 
