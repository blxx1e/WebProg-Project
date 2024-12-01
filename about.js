export function About(){
  const details = {
    heading: "About Me",
    subHeading: "Discover My Story",
    aboutMe: "Hello! I'm Blessie Codillero, a passionate web developer with a knack for creating dynamic and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I enjoy bringing ideas to life on the web. My journey in web development began with a curiosity for how websites work, and it has since evolved into a full-fledged career. I thrive on solving complex problems and continuously learning new technologies to stay ahead in this ever-evolving field. When I'm not coding, you can find me exploring the latest trends in web design or enjoying a good book. Let's connect and create something amazing together!"   
  }

  const aboutContentHTML = `
    <h1 class="heading">${details.heading}</h1>
    <p class="subheading">${details.subHeading}</p>
    <p class="about-me-txt">${details.aboutMe}</p>
  `;

  const aboutSection = document.querySelector('#about-section').innerHTML = aboutContentHTML;
}