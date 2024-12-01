export function Contact(){
  const details = {
    heading: 'Contact Me',
    subHeading: 'Feel free to reach out to me!'
  }
  
  const contactContentHTML = `
    <h1 class="heading">${details.heading}</h1>
    <p class="subheading">${details.subHeading}</p>
    <form action="">
      <div class="inputs-container d-flex">
          <input type="name" placeholder="Enter Your Name">
          <input type="email" placeholder="Enter Your Email">
      </div>                    
      <textarea name="" id="" placeholder="Your Message here"></textarea>
      <button class="submit-button">Submit</button>
    </form>
  `;

  const contactSection =  document.querySelector('#contact-section').innerHTML = contactContentHTML;
}