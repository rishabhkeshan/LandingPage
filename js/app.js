// global variables
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

// get Active Element
function activeSec() {
  maxSection = sections[0];
  min = 10000;
  for (item of sections) {
    let value = item.getBoundingClientRect();
    if (value.top > -500 & value.top < min) {
      min = value.top;
      maxSection = item;
    };
  };
  return maxSection;
};


// add Elements to the Navbar
function addNavbarElements() {
  for (let item of sections) {
    let section = document.createElement('li');
    section.className = 'menu__link';
    section.dataset.nav = item.id;
    section.innerText = item.dataset.nav;
    navbar.appendChild(section);
  };
};

// Add class 'active' to section when near top of viewport
function setActive() {
  window.addEventListener('scroll', function (event) {
    let section = activeSec();
    section.classList.add('activeClass');
    // set other sections as inactive
    for (let val of sections) {
      if (val.id != section.id & val.classList.contains('activeClass')) {
        val.classList.remove('activeClass');
      }
    }
    // add active class
    const active = document.querySelector('li[data-nav="' + section.id + '"]');
    active.classList.add('active__link');
    // removing active class from other sections
    const headers = document.querySelectorAll('.menu__link');
    for (let item of headers) {
      // console.log(item);
      if (item.dataset.nav != active.dataset.nav & item.classList.contains('active__link')) {
        item.classList.remove('active__link');
      }
    };
  });
};

// Scroll to the particular click Event
function scrollToSection() {
  navbar.addEventListener('click', function (event) {
    const clicked = document.querySelector('#' + event.target.dataset.nav)
    if(clicked.dataset.nav=='Home'){
      window.scrollTo(clicked.getBoundingClientRect().top,0);
    }else{
      clicked.scrollIntoView();
    }
  });
};

// Add Navbar Elements
addNavbarElements();

// Scroll to the section
scrollToSection();

// Set sections as active
setActive();

