import React from 'react';
import { connect } from 'react-redux';

import DoneButton from './taskList/DoneButton';
import EditTaskInput from './taskList/EditTaskInput';
import DeleteButton from './taskList/DeleteButton';

const mapStateToProps = state => {
    return { tasks: state.tasks };
};

const TaskList = ({ tasks }) => {
    if (!tasks.length) {
        return (
            <div className="is-task-list">
                No Posts
            </div>
        )
    }
    return (
        <div className="is-task-list" >
            {tasks.map(task => (
                <div className="box" key={task._id}>
                    <div className="columns is-mobile">

                        <DoneButton />
                        <EditTaskInput task={task} />
                        <DeleteButton _id={task._id} />

                    </div>
                </div>
            ))}
        </div>
    );
};

export default connect(mapStateToProps)(TaskList);