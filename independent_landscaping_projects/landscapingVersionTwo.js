document.addEventListener("DOMContentLoaded", function() {

  let canvasElement = document.querySelector('#canvas-1');
  let initialTop = canvasElement.getBoundingClientRect().top;
  
  function checkMovement() {
      let currentTop = canvasElement.getBoundingClientRect().top;
      
      if (currentTop < initialTop) {
          // #canvas-1 has moved upwards
          let instructionsElement = document.querySelector('#scroll-up');
          if (instructionsElement) {
              instructionsElement.style.animation = 'none';
              instructionsElement.style.display = 'none';
          }
      }
      initialTop = currentTop;
      
      // Continue checking for movement
      requestAnimationFrame(checkMovement);
  }
  
  // Start the check
  checkMovement();
  
})
const jaret = 'jaret'



document.addEventListener('scroll', function(event) {
  if (event.target.id === 'canvas-1') {
      console.log('Scrolling detected in #canvas-1');
      // Your scrolling logic here
  }
}, true);  // Setting the third argument to true captures the event during the capture phase
