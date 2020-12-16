import * as types from './../constants/ActionTypes';



let s4 = () => {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}

let generateID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

let findIndex = (tasks , id) => {
    let result = -1
    tasks.forEach((task , index) => {
        if(task.id === id){
            result = index;
        }
    });
    return result;
}

let data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data ? data : [];

let tasks = (state = initialState , action) => { // reducer
    let index = -1;
    switch(action.type){
        case types.LIST_ALL: 
            return state;
        case types.SAVE_TASK:
            let task = {
                id : action.task.id,
                name : action.task.name,
                status : action.task.status
            };
            if(!task.id){
                task.id = generateID();
                state.push(task);
            }else{
                index = findIndex(state, task.id);
                state[index] = task;
            } 
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state]; // copy ra mot array moi roi tra ve  
        case types.UPDATE_STATUS:
            index = findIndex(state , action.id);
            // state[index].status = !state[index].status;
            // let cloneTask = {...state[index]};
            // cloneTask.status = !cloneTask.status;
            // state[index] = cloneTask;
            state[index] = {
                ...state[index],
                status : !state[index].status
            }
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        case types.REMOVE_TASK:
            index = findIndex(state , action.id);
            state.splice(index , 1);
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        default : return state
    }
}

export default tasks;
//Clone task mới = task cũ && status = !status