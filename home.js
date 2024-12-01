export function Home(){

 const details = {
  skill: 'Web Developer',
  profilePic: 'pf.jpg',
  socmedIcon1: 'pink fb.png',
  socmedIcon2: 'pink instagram.png',
  socmedIcon3: 'pink twitter.png'
 }

//  display content home section //
 const sectionContentHTML = `
    <div class="details-container">
          <h1 class="heading">My <span class="hightlight-txt">Portfolio</span></h1>
          <h3 class="introduce">I'm a <span class="hightlight-txt main-skill">${details.skill}</span></h3>
          <p>Welcome to my portfolio! Explore my projects and learn more about my work. Let's connect and build something amazing together!</p>
          <nav class="socmed-nav">
              <ul>
                  <li><a href="https://www.facebook.com/blehsiicodillero?mibextid=ZbWKwL"><img src="images and icons/icons/${details.socmedIcon1}" class="socmed-icon" alt="socmed-icon"></a></li>
                  <li><a href="https://www.instagram.com/bblessielc?igsh=eG95aHFkNXZnZno2"><img src="images and icons/icons/${details.socmedIcon2}" class="socmed-icon" alt="socmed-icon"></a></li>
                  <li><a href=""><img src="images and icons/icons/${details.socmedIcon3}" class="socmed-icon" alt="socmed-iconn" ></a></li>
              </ul>
          </nav>
          <div class="buttons-container">
              <button class="me-btn">Me</button>
              <a class="show-contact-sec-btn" href="#contact-section">Contact</a>
          </div>                      
      </div>
      <div class="profile-pic-container">
          <img src="images and icons/images/${details.profilePic}" alt="profile-pic" class="profile-pic">
    </div>
 `;

 const homeSection =  document.querySelector('#home-section').innerHTML =  sectionContentHTML;


  // Me Button //
  const meBtn = document.querySelector('#home-section .me-btn');
  const profilePic = document.querySelector('#home-section .profile-pic');

  meBtn.addEventListener('click', ()=>{
    profilePic.style.display = 'block';
    profilePic.style.animation = 'scale-up 1s forwards';
  });


  //Contact Button//
  const contactBtn = document.querySelector('#home-section .show-contact-sec-btn');
  const sections = document.querySelectorAll('section:not(#home-section)');
  contactBtn.addEventListener('click', ()=>{
    sections.forEach(section => {
      const sectionId = section.id;

      if(sectionId === 'contact-section'){
        section.style.display = 'block';
      }else{
        section.style.display = 'none';
      }
    })
  })

}