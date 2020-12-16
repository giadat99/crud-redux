import React, {Component} from 'react';
import TaskSearchControl from "./TaskSearchControl";
import TaskSortControl from "./TaskSortControl";

export default class TaskControl extends Component{
    render() {
        return (
            <div>
            {/* TaskSearchControl */}
                <TaskSearchControl/>
            {/* TaskSortControl */}
                <TaskSortControl/>
            </div>
        );
    }
}


