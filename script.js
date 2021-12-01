
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

}).resize(function() {
  dotContainer.height($window.height());
});