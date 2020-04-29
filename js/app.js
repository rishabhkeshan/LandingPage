// global variables
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

// get Active Element
function activeSec(section) {
    let value = section.getBoundingClientRect();
  return (
    (value.top+value.height) >=56 &&
    value.bottom <=
    (window.innerHeight || document.documentElement.clientHeight)-72
  );
};


// add Elements to the Navbar
function addNavbarElements() {
  for (let section of sections) {
    let item = document.createElement('li');
    item.className = 'menu__link';
    item.dataset.nav = section.id;
    item.innerText = section.dataset.nav;
    navbar.appendChild(item);
  };
};

// Scroll to the particular click Event
function scrollToSection() {
  navbar.addEventListener('click', function (event) {
    const clicked = document.querySelector('#' + event.target.dataset.nav)
    clicked.scrollIntoView();
  });
};


// Add class 'active' to section when near top of viewport
function setActive() {
  for(let section of sections)
  {
  let active = document.querySelector('li[data-nav="' + section.id + '"]');
  window.addEventListener('scroll', function (event) {
    if(activeSec(section)){
      console.log(section.id);
      section.classList.add('activeClass');
      active.classList.add('active__link');         
    }
    else{
      section.classList.remove('activeClass');
      active.classList.remove('active__link');
    }
    // add active class

    // removing active class from other sections

  },false);
}
};


// Add Navbar Elements
addNavbarElements();

// Scroll to the section
scrollToSection();

// Set sections as active
setActive();