export function Projects(){
  
  const details = {
    heading: 'My Projects',
    subheading: 'Here are some of my latest projects.'
  }

  const projectSectionContentHTML = `
    <h1 class="heading">${details.heading}</h1>
    <p class="subheading">${details.subheading}</p>
    <div class="projects-container d-flex">
          
    </div>
  `;
  const projectSection = document.querySelector('#projects-section').innerHTML = projectSectionContentHTML


  const projects = [
    {
      image: 'webproject.gif',
      title: 'Project 1'
    },
    {
      image: 'webproject.gif',
      title: 'Project 2'
    },
    {
      image: 'webproject.gif',
      title: 'Project 3'
    }
  ];

  // dsplay bawat project
  let projectHTML = ''

  projects.forEach(project => {
    projectHTML += `
     <div class="project">
      <img src="images and icons/images/${project.image}" alt="" class="project-img">
      <p class="project-title">${project.title}</p>
     </div>
  `
  });
  const projectsContainer = document.querySelector('.projects-container').innerHTML = projectHTML;

}  









  

