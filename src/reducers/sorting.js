import * as types from '../constants/ActionTypes';


let initialState = {
        by : 'name',
        value : 1
}

let sortTask = (state = initialState , action) => {
    switch(action.type){
        case types.SORT_TASK:
            state.by = action.sortBy;
            state.value = action.sortValue;
            return {...state};
        default : return state;
    }
};

export default sortTask;