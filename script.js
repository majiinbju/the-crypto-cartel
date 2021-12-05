/* FAQ Function */ 

var shows = document.querySelectorAll(".show");
var infos = document.querySelectorAll(".info");
var accordions = document.querySelectorAll(".accordion");

for (let i = 0; i < shows.length; i++) {
  shows[i].onclick = function() {
    for (let j = 0; j < shows.length; j++) {
      if (shows[j] != this) {
        infos[j].classList.remove("reveal");
        shows[j].innerHTML = "+";
        accordions[j].classList.remove("radius");
      }
    }
    accordions[i].classList.toggle("radius");
    infos[i].classList.toggle("reveal");
    if (infos[i].className.includes("reveal")) shows[i].innerHTML = "-";
    else shows[i].innerHTML = "+";
  };
}


/* Drop-down Menu for Navbar */

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

/* Smooth Scrolling */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


