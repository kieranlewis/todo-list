const projectForm = document.querySelector('#form-container');
const projectDiv = document.querySelector('#project-container');

export const displayForm = () => {
    if(projectForm.style.display !== 'none') {
        projectForm.style.display = 'none';
    } else {
        projectForm.style.display = 'block';
    }
};

export const displayProjects = (projects) => {
    projectDiv.innerHTML = '';

    projects.forEach(project => {
        console.log(project);
        const header = document.createElement('h2');
        header.textContent = project.title;
        projectDiv.appendChild(header);
    });
};