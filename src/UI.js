const projectForm = document.querySelector('#form-container');
const projectDiv = document.querySelector('#project-container');
const projectListDiv = document.querySelector('.project-list');

export const openForm = () => {
    projectForm.style.display = 'block';
};

export const closeForm = () => {
    projectForm.style.display = 'none';
}

export const displayProjects = (project) => {
    const header = document.createElement('a');
    header.textContent = project.title;
    header.classList.add("w3-bar-item", "w3-button");
    projectListDiv.appendChild(header);
}