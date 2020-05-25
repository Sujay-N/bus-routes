
 import { ADD_CITY,ADD_DETAILS,SET_CURR_PAGE,SET_PER_PAGE,DELETE_BUS } from './actionType';

 


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

const setCurrentPg = (payload) => ({
	type: SET_CURR_PAGE,
	payload
});

const setPerPg = (payload) => ({
	type: SET_PER_PAGE,
	payload
});

const del = (payload) => ({
    type:DELETE_BUS,
    payload
})
 export {add,addCity,del,setPerPg,setCurrentPg};
 
