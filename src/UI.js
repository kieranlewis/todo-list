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
    console.log(projects);
};