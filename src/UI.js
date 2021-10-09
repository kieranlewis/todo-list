import * as Index from './index';

const projectForm = document.querySelector('#form-container');
const projectDiv = document.querySelector('#project-container');
const projectListDiv = document.querySelector('.project-list');

export const openForm = () => {
    projectForm.style.display = 'block';
};

export const closeForm = () => {
    document.querySelector('.project-form').reset();
    projectForm.style.display = 'none';
}

export const displayProjectList = (projects) => {
    projectListDiv.innerHTML = '';
    let index = 0;

    projects.forEach(project => {
        const projectLink = document.createElement('a');
        projectLink.textContent = project.title;
        projectLink.classList.add("w3-bar-item", "w3-button");
        projectLink.setAttribute('data-index', index);
        projectLink.addEventListener('click', displayProject);
        projectListDiv.appendChild(projectLink);
        index++;
    });
}

export const displayProject = (e) => {
    let index = e.target.getAttribute('data-index');
    let project = Index.getProjects()[index];
    console.log(project);
    projectDiv.innerHTML = '';

    const projectHeader = document.createElement('h2');
    projectHeader.textContent = project.title;
    projectDiv.appendChild(projectHeader);

    const taskHeader = document.createElement('h3');
    taskHeader.textContent = 'Tasks';
    projectDiv.appendChild(taskHeader);

    displayTasks(project.tasks);
}

const displayTasks = (tasks) => {
    let taskList = document.createElement('ul');
    if(tasks.length === 0) {
        taskList.textContent = 'No tasks';
    } else {
        // create list of tasks and append to ul
    }
    projectDiv.appendChild(taskList);
}