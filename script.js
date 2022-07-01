console.log('connected to script.js');

//query selectors
homeLink = document.querySelector('#home-link')
aboutLink = document.querySelector('#about-link')
projectsLink = document.querySelector('#projects-link')
resumeLink = document.querySelector('#resume-link')
contactLink = document.querySelector('#contact-link')

//functions
switchPageHome = function () {
    document.querySelector('.landing-page').style.display = 'block';
    document.querySelector('.projects').style.display = 'none';
    document.querySelector('.contact-me').style.display = 'none';
    document.querySelector('.resume').style.display = 'none';
    document.querySelector('.about-page').style.display = 'none';
};

switchPageAbout = function () {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.projects').style.display = 'none';
    document.querySelector('.contact-me').style.display = 'none';
    document.querySelector('.resume').style.display = 'none';
    document.querySelector('.about-page').style.display = 'block';
};
switchPageProjects = function () {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.projects').style.display = 'block';
    document.querySelector('.contact-me').style.display = 'none';
    document.querySelector('.resume').style.display = 'none';
    document.querySelector('.about-page').style.display = 'none';
};
switchPageResume = function () {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.projects').style.display = 'none';
    document.querySelector('.contact-me').style.display = 'none';
    document.querySelector('.resume').style.display = 'block';
    document.querySelector('.about-page').style.display = 'none';
};
switchPageContact = function () {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.projects').style.display = 'none';
    document.querySelector('.contact-me').style.display = 'block';
    document.querySelector('.resume').style.display = 'none';
    document.querySelector('.about-page').style.display = 'none';
};

//event listeners
aboutLink.addEventListener('click', switchPageAbout)
homeLink.addEventListener('click', switchPageHome)
projectsLink.addEventListener('click', switchPageProjects)
resumeLink.addEventListener('click', switchPageResume)
contactLink.addEventListener('click', switchPageContact)


