import './style.css';
import Task from './Task';
import Project from './Project';
import * as UI from './UI';

const projects = [];

const submitButton = document.querySelector('#submit-btn');
const addProjectButton = document.querySelector('#add-project-btn');
const span = document.querySelector('.close');

function createProject(projectName) {
    const newProject = Project(projectName, []);
    projects.push(newProject);
}

// Event Listeners
addProjectButton.addEventListener('click', UI.openForm);

span.addEventListener('click', UI.closeForm);

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let projectName = document.querySelector('#projectName').value;
    createProject(projectName);
    UI.displayProjects(projects);
    UI.closeForm();
});