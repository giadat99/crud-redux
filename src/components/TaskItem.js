import React, {Component} from "react";
import * as actions from './../actions/index';
import { connect } from 'react-redux';
class TaskItem extends Component{

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onRemoveTask = () => {
         this.props.onRemoveTask(this.props.task.id);
         this.props.onCloseForm();
    }

    onUpdateTask = () => {
        this.props.onOpenForm();
        this.props.onUpdateTask(this.props.task);
    }

    render() {
        let { task,index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                      <span
                          className={task.status ? 'label label-success' : 'label label-danger'}
                          onClick={this.onUpdateStatus}
                      >
                          {task.status ? 'Active' : 'Inactive'}
                      </span>
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.onUpdateTask}
                    >
                        <span className="fa fa-pencil"/>
                    </button>
                    &nbsp;
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onRemoveTask}
                    >
                        <span className="fa fa-trash"/>
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch , props) => {
    return {
        onUpdateStatus : (id) => {
            dispatch(actions.updateStatus(id));
        },
        onRemoveTask : (id) => {
            dispatch(actions.removeTask(id));
        },
        onCloseForm : () => {
            dispatch(actions.closeForm());
        },
        onOpenForm : () => {
            dispatch(actions.openForm());
        },
        onUpdateTask : (task) => {
            dispatch(actions.updateTask(task));
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);