const video = document.getElementById('myVideo');
const navbar = document.getElementById('navbar')

window.addEventListener('scroll',()=>{
    navbar.classList.toggle('scroll',window.scrollY > 0);
})

video.playbackRate = 0.5;
// video.pause();