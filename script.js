
    let scene, camera, renderer;
    function init() {
      //create scene object
      scene = new THREE.Scene();
      
      //setup camera with facing upward
      camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI/2;
      
      //setup renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      animate(); 
    }
    //rendering loop
    function animate() {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    init();

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


/* Space Particles in the Background */

var $window = $(window);

$window.load(function() {
  var dotContainer = $("#dotContainer");

  dotContainer.height($window.height());

  function getParticlesAnimation() {
    i = 500,
      dots = [];

    while (--i > -1) {
      dot = document.createElement('div');
      dot.className = 'dot';
      dotContainer.append(dot);
      tween(dot);
    }
  }
  
  function tween(element) {
    console.log("tween")
    TweenMax.set(element, {
        x: Math.random() * $(window).width(),
        y: Math.random() * $(window).height(),
        z: Math.random() * Math.PI * 100
      });
      TweenMax.to(element, Math.random() * 10, {
        z: 3000,
        onComplete:tween,
        
        onCompleteParams:[element]
      });
  }
  
  
  
  
  getParticlesAnimation();

})


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


