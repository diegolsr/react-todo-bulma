import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import { fetchAllTasks } from './actions/taskActions';

import './style/theme.css';

import App from './App';

store.dispatch(fetchAllTasks());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
