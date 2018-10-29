import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../../actions/taskActions';

const mapDispatchToProps = dispatch => {
    return {
        createTask: task => dispatch(createTask(task))
    };
};

class CreateTaskInput extends Component {
    constructor() {
        super();

        this.state = {
            title: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { title } = this.state;
        this.props.createTask({ title });
        this.setState({ title: '' });
    }

    render() {
        const { title } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <div className="control">
                        <input
                            className="input is-medium"
                            type="text"
                            placeholder="Create a Task..."
                            id="title"
                            value={title}
                            onChange={this.handleChange}
                        >
                        </input>
                    </div>
                </div>
                <button type="submit" className="button is-primary">
                    Add Task
                </button>
            </form >
        )
    }

};


export default connect(null, mapDispatchToProps)(CreateTaskInput);