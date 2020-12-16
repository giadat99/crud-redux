import React, {Component} from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { connect } from 'react-redux'
import * as actions from './actions/index'
 class App extends Component{
    onToggleForm = () => {
        let { taskEditing } = this.props;
        if(taskEditing && taskEditing.id !== ''){
            this.props.onOpenForm();
        }else{
            this.props.onToggleForm();
        }
        this.props.onClearTask({
            id : '',
            name : '',
            status : false
        });
    }
    findIndex = (id) => {
        let { tasks } = this.state;
        let result = -1;
        tasks.forEach((task , index) => {
            if(task.id === id){
                result = index;
            }
        });
        return result;
    }

 
     render() {
        let { isDisplayForm } = this.props;
        let elementTaskForm = isDisplayForm ?
            <TaskForm/> : '';
           return (
               <div className="container">
                 <div className="text-center">
                   <h1>To Do Lists</h1>
                   <hr/>
                 </div>
                 <div className="row">
                   <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                     {/* Form */}
                       {elementTaskForm}
                   </div>
                   <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                     <button
                         type="button"
                         className="btn btn-primary"
                         onClick={this.onToggleForm}
                     >
                       <span className="fa fa-plus mr-5"/>Add Task
                     </button>
                     {/* TaskSearchControl and sort */}
                     <div className="row mt-15">
                      <TaskControl
                          onSearch={this.onSearch}
                          onSort={this.onSort}
                      />
                     </div>
                     <div className="row mt-15">
                       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList/>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
           );
     }
}

const mapStateToProps = state => {
    return {
        isDisplayForm : state.isDisplayForm,
        taskEditing : state.taskEditing
    };
};

const mapDispatchToProps = (dispatch , props) => {
    return {
        onToggleForm : () => {
            dispatch(actions.toggleForm())
        },
        onClearTask : (task) => {
            dispatch(actions.updateTask(task));
        },
        onOpenForm : () => {
            dispatch(actions.openForm());
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);

