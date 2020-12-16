import * as types from './../constants/ActionTypes';


let initialState = {
    name : '',
    status : 0
}

let filterTable = (state = initialState , action) => {
    switch(action.type){
        case types.FILTER_TABLE:
           return {
               name : action.filterName,
               status : +(action.filterStatus)
           }
        default : return state;
    }
}

export default filterTable;