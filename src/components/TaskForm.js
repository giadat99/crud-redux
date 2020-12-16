import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class TaskForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name : '',
            status : false
        };
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }

    componentDidMount() {
        if(this.props.taskEditing && this.props.taskEditing.id != null){
            let { taskEditing } = this.props;
            this.setState({
                id : taskEditing.id,
                name : taskEditing.name,
                status : taskEditing.status
            });
        }else{
            this.onClear();
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.taskEditing){
            this.setState({
                id : nextProps.taskEditing.id,
                name : nextProps.taskEditing.name,
                status : nextProps.taskEditing.status
            });
        }else{
            this.onClear();
        }
   }

   // static getDerivedStateFromProps(props,state){
   //      if(props.task !== state.task){
   //          return {
   //              id : props.task.id,
   //              name : props.task.id,
   //              status : props.task.status
   //          };
   //      }
   //      return null;
   // }
   //
   // componentDidUpdate(props,state) {
   //      if(props.task !== state.task){
   //          this.setState({
   //              id : props.task.id,
   //              name : props.task.name,
   //              status : props.task.status
   //          });
   //      }
   // }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        if(name === 'status'){
            value = target.value === 'true' ? true : false;
        }
        this.setState({
           [name] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();

        this.props.onSave(this.state);
        this.onClear();;
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
           name : '',
           status : false
        });
    }

    render() {
        let { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        { id !== '' ? 'Edit Task' : 'Add Task' }
                        <span className="fa fa-times-circle close" onClick={this.onCloseForm}/>
                    </h3>
                </div>
                <div className="panel-body">
                    {/* Form */}
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Status :</label>
                        <select
                            className="form-control"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value={true}>Active</option>
                            <option value={false}>Inactive</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Save</button>
                            &nbsp;
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={this.onClear}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
       taskEditing : state.taskEditing
    }
};

const mapDispatchToProps = (dispatch , props) => {
    return {
        onSave : (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm : () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);


