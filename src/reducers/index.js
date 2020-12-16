import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import taskEditing from './taskEditing';
import filterTable from './filterTable';
import searchTask from './search';
import sort from './sorting';
const myReducer = combineReducers({
    tasks,// tasks : tasks
    isDisplayForm, // isDisplayForm : isDisplayForm
    taskEditing,
    filterTable,
    searchTask,
    sort
});

export default myReducer;