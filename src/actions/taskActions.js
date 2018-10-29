import axios from 'axios';
import { ADD_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK } from './actionTypes';

const apiUrl = 'http://localhost:3001/api/tasks';

export function createTask({ title, details, conclusion_date, remember_me_date }) {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, { title, details, conclusion_date, remember_me_date })
            .then(res => {
                dispatch(createTaskSuccess(res.data));
            })
            .catch(err => {
                throw (err);
            })
    };
};

export function createTaskSuccess(data) {
    return {
        type: ADD_TASK,
        payload: data
    };
};

export function deleteTask(id) {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/${id}`)
            .then(res => {
                dispatch(deleteTaskSuccess(res.data));
            })
            .catch(err => {
                throw (err);
            });
    };
};

export function deleteTaskSuccess(id) {
    return {
        type: DELETE_TASK,
        payload: {
            id
        }
    };
};

export function updateTask({ id, title, completed, details, conclusion_date, remember_me_date }) {
    return (dispatch) => {
        return axios.put(`${apiUrl}/${id}`)
            .then(res => {
                dispatch(updateTaskSuccess(res.data));
            })
            .catch(err => {
                throw (err);
            });
    };
};

export function updateTaskSuccess(data) {
    return {
        type: UPDATE_TASK,
        payload: {
            _id: data.id,
            title: data.title,
            details: data.details,
            conclusion_date: data.conclusion_date,
            remember_me_date: data.remember_me_date,
        }
    };
};

export function fetchAllTasks() {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(res => {
                dispatch(fetchTasksSuccess(res.data))
            })
            .catch(err => {
                throw (err);
            })
    };
};

export function fetchTasksSuccess(tasks) {
    return {
        type: GET_TASKS,
        tasks
    };
};