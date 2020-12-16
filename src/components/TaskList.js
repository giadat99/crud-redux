import React, {Component} from "react";
import TaskItem from "./TaskItem";
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            filterName : '',
            filterStatus : 0 // all : 0 , active : 1 , inactive : -1
        };
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
            )
        this.setState({
           [name] : value
        });
    }

    render() {
        let { tasks,filterTable,keyword,sort } = this.props;
        let { filterName, filterStatus } = this.state;

        //filter Table
            if(filterTable.name){
                tasks = tasks.filter((task) => {                 
                     return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;                  
                })
            }
            if(filterTable.status){
                    tasks = tasks.filter((task) => {
                        if(filterTable.status === 0){
                            return task;
                        }else{
                            return task.status === (filterTable.status === 1 ? true : false);
                        }
                    });             
            }
        
        //search Task 
        if(keyword){
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            });
        }

        // sort Task
        if(sort){
            if(sort.by === 'name'){
                tasks = tasks.sort((a , b) => {
                    if(a.name>b.name) return sort.value;
                    else if(a.name<b.name) return -sort.value;
                    else return 0;
                });
            }else {
                tasks = tasks.sort((a , b) =>{
                    if(a.status>b.status) return -sort.value;
                    else if(a.status<b.status) return sort.value;
                    else return 0;
                });
            }
        }
        let elementTasks = tasks.map((task , index) => {
            return <TaskItem
                        key={task.id}
                        index={index}
                        task={task}
                    />
        });
        return(
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td/>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            name="filterName"
                            value={filterName}
                            onChange={this.onChange}
                        />
                    </td>
                    <td>
                        <select className="form-control"
                                name="filterStatus"
                                value={filterStatus}
                                onChange={this.onChange}
                        >
                            <option value={0}>All</option>
                            <option value={-1}>Inactive</option>
                            <option value={1}>Active</option>
                        </select>
                    </td>
                    <td/>
                </tr>
                { elementTasks.length > 0 ?
                    elementTasks :
                    <tr><td colSpan={4} style={{textAlign : "center",fontWeight : "bold"}}>{'No result ...'}</td></tr> }
                </tbody>
            </table>
        );
    }
}
const mapStateToProps = (state) => {
    return { 
        tasks : state.tasks,
        filterTable : state.filterTable,
        keyword : state.searchTask,
        sort : state.sort
     };
}

const mapDispatchToProps = (dispatch , props) => {
    return {
        onFilter : (name , status) => {
            dispatch(actions.filterTable(name , status));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);