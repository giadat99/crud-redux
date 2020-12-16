
import * as types from './../constants/ActionTypes';

let initialState = '';

let searchTask = (state = initialState , action) => {
    switch(action.type){
        case types.SEARCH_TASK:
            return action.keyword;
        default : return state;
    }
}

export default searchTask;