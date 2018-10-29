import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../../../actions/taskActions';

const mapDispatchToProps = dispatch => {
    return {
        deleteTask: _id => dispatch(deleteTask(_id))
    };
};

const DeleteButton = ({ _id, deleteTask }) => {
    return (
        <div className="column is-2 is-centered" >
            <button className="button is-danger is-small"
                onClick={() => deleteTask(_id)}>
                Delete
                </button>
        </div >
    )
};

export default connect(null, mapDispatchToProps)(DeleteButton);