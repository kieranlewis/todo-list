import * as Task from './Task';

const Project = (title, tasks) => {
    const addTask = () => {
        console.log(tasks);
    };

    return { title, tasks, addTask };
};

export default Project;