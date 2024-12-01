export function header(){
  const topNavlinks = document.querySelectorAll('.top-nav li a');
const sections = document.querySelectorAll('section:not(#home-section)');

topNavlinks.forEach(link => {
  const linkValue = link.getAttribute('data-value');

  link.addEventListener('click', ()=>{
    if(linkValue !== 'home-section'){
      sections.forEach(section => {
        const sectionClass = section.classList;
    
        if(sectionClass.contains(linkValue)){
          section.style.display = 'block'
        }else{
          section.style.display = 'none'
        }
      });
    }
  });
});
}
