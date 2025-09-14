// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
  // Select the button and the box elements
  const animateButton = document.getElementById('animateButton');
  const animatedBox = document.getElementById('animatedBox');

  // Function to trigger the animation
  function triggerAnimation() {
    // Add the 'animate' class to the box to start the animation
    animatedBox.classList.add('animate');

    // Listen for the end of the animation and remove the 'animate' class
    animatedBox.addEventListener('animationend', () => {
      animatedBox.classList.remove('animate');
    });
  }

  // Add a click event listener to the button to trigger the animation
  animateButton.addEventListener('click', triggerAnimation);
});
