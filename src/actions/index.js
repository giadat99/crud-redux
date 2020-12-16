import * as types from './../constants/ActionTypes';

export const listAll = () => {
    return {
        type : types.LIST_ALL
    };
};

export const saveTask = (task) => { 
    return {
        type : types.SAVE_TASK,
        task // task : task
    };
}

export const toggleForm = () => {
    return {
        type : types.TOGGLE_FORM
    }
}

export const openForm = () => {
    return {
        type : types.OPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type : types.CLOSE_FORM
    }
}

export const updateStatus = (id) => {
    return {
        type : types.UPDATE_STATUS,
        id
    }
}

export const removeTask = (id) => {
    return {
        type : types.REMOVE_TASK,
        id
    }
}

export const updateTask = (task) => {
    return {
        type : types.UPDATE_TASK,
        task
    }
}

export const filterTable = (filterName , filterStatus) => {
    return {
        type : types.FILTER_TABLE,
        filterName,
        filterStatus
    }
}

export const searchTask = (keyword) => {
    return {
        type : types.SEARCH_TASK,
        keyword
    }
}

export const sortTask = (sort) => {
    return {
        type : types.SORT_TASK,
        sortBy : sort.by,
        sortValue : sort.value
    }
}