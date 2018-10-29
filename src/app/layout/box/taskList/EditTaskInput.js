import React from 'react';

const EditTaskInput = ({ task: { title } }) => (
    <div className="column is-9 is-not-margin-left">
        <input className="input" value={title} />
    </div>
);

export default EditTaskInput;