import { ADD_TASK, GET_TASKS, DELETE_TASK, UPDATE_TASK } from '../actions/actionTypes';

const initialiState = {
    tasks: [],
};

const rootReducer = (state = initialiState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];

        case GET_TASKS:
            return action.tasks;

        case DELETE_TASK:
            return state.filter(task => task._id !== action.payload.id);

        case UPDATE_TASK:
            const updatedTasks = state.map(task => {
                if (task.id === action.payload._id) {
                    return { ...task, ...action.payload }
                }
                return task;
            })

            return updatedTasks;

        default:
            return state;
    }
}

export default rootReducer;