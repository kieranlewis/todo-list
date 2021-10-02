import './style.css';
import Task from './Task';
import Project from './Project';

const button = document.querySelector('#submit-btn');

const projects = [];

button.addEventListener('click', (e) => {
    e.preventDefault();
    let projectName = document.querySelector('#projectName').value;
    const newProject = Project(projectName, []);
    projects.push(newProject);
});