import React from 'react';

import CreateTaskInput from './box/CreateTaskInput';
import Menu from './box/Menu';
import TaskList from './box/TaskList';
import Footer from './box/Footer';

const Box = () => (
    <div className="box">
        <CreateTaskInput />
        <Menu />
        <TaskList />
        <Footer />
    </div>
);


export default Box;