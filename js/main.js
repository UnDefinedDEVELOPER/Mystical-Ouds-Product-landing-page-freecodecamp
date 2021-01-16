const hamburgerMenu = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.nav');
const title = document.querySelector('.title');
let width = window.innerWidth;

function query(x) {
    if (x.matches) { // If media query matches
      hamburgerMenu.classList.remove('hide');
      hamburgerMenu.classList.add('flex');
      navBar.classList.add('hide');
    } else {
        hamburgerMenu.classList.add('hide');
        hamburgerMenu.classList.remove('flex');
        navBar.classList.remove('hide');
    }
  }
  
  const x = window.matchMedia("(max-width: 1000px)");
  query(x); // Call listener function at run time
  x.addListener(query); // Attach listener function on state changes */ 

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('showx');
    title.classList.toggle('hide');
    navBar.classList.toggle('hide');
})