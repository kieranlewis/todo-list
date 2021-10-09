import * as Index from './index';

const projectForm = document.querySelector('#form-container');
const projectDiv = document.querySelector('#project-container');
const projectListDiv = document.querySelector('.project-list');

export const openForm = () => {
    projectForm.style.display = 'block';
};

export const closeForm = () => {
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
    console.log(e.target.textContent);
}