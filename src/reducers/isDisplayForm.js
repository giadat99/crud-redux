import * as types from '../constants/ActionTypes';


let initialState = false;

let isDisplayForm = (state = initialState , action) => { // reducer
    switch(action.type){
        case types.TOGGLE_FORM:
            return !state;
        case types.OPEN_FORM:
            return true;
        case types.CLOSE_FORM:
            return false;    
        default : return state
    }
}

export default isDisplayForm;