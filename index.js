// Get the video element
const video = document.querySelector('video');
// Listen for the scroll event
window.addEventListener('scroll', function() {
  // Calculate the amount scrolled vertically
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  // Update the video position
  video.style.top = `${-scrollTop}px`;
});


