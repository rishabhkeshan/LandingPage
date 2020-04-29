// global variables
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

// get Active Element
function activeSec() {
    for (let section of sections) {
    let value = section.getBoundingClientRect();
    if ((value.top + value.height) >= 50 &&
        value.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ){
        return section;
    };
}
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
        window.addEventListener('scroll', function (event) {
        let activeSection=activeSec();
        let active = document.querySelector('li[data-nav="' + activeSection.id + '"]');
        activeSection.classList.add('activeClass');
        active.classList.add('active__link');
        for (let item of sections) {
            if (item.id != activeSection.id & item.classList.contains('activeClass')) {
                    item.classList.remove('activeClass');
                    let navActive = document.querySelector('li[data-nav="' + item.id + '"]');
                    navActive.classList.remove('active__link');
                }
            }
        }, false);
};


// Add Navbar Elements
addNavbarElements();

// Scroll to the section
scrollToSection();

// Set sections as active
setActive();