// At the beginning of your carousel.js file
var requestAnimationFrame = window.requestAnimationFrame.bind(window);

// The rest of your code...


window.addEventListener('load', function() {
  var myCarousel = document.querySelector('#myCarousel');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000
  });
});

