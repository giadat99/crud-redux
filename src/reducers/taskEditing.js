import * as types from '../constants/ActionTypes';

let initialState = {
    id : '',
    name : '',
    status : false
};

let taskEditing = (state = initialState , action) => {
    switch(action.type){
        case types.UPDATE_TASK:
            return action.task;

        default : return state;
    }
}

export default taskEditing;