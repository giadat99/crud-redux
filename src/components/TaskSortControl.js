import React, {Component} from "react";
import * as actions from './../actions/index';
import { connect } from 'react-redux';
 class TaskSortControl extends Component{

   onClick = (sortBy , sortValue) => {
       this.props.onSort({
           by : sortBy,
           value : sortValue
       });
   }

    render() {
        let { sort } = this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort <span className="fa fa-caret-square-o-down ml-5"/>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name',1)}>
                            <a
                                role="button"
                                href="/#"
                                className={(sort.by === 'name' && sort.value === 1) ? 'sort_selected' : ''}
                            >
                        <span className="fa fa-sort-alpha-asc pr-5">
                           A-Z
                        </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name',-1)}>
                            <a
                                role="button"
                                href="/#"
                                className={(sort.by === 'name' && sort.value === -1) ? 'sort_selected' : ''}
                            >
                        <span className="fa fa-sort-alpha-desc pr-5">
                           Z-A
                        </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"/>
                        <li onClick={() => this.onClick('status',-1)}>
                            <
                            a
                            role="button"
                            href="/#"
                            className={(sort.by === 'status' && sort.value === -1) ? 'sort_selected' : ''}
                        >
                            Inactive
                        </a>
                        </li>
                        <li onClick={() => this.onClick('status',1)}>
                            <a
                                role="button"
                                href="/#"
                                className={(sort.by === 'status' && sort.value === 1) ? 'sort_selected' : ''}
                            >
                                Active</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sort : state.sort
    };
}

const mapDispatchToProps = (dispatch , props) => {
    return {
        onSort : (sort) => {
            dispatch(actions.sortTask(sort));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskSortControl);
