const video = document.getElementById('introvid');
const loadingOverlay = document.querySelector('.loading-overlay');
let isUserInteraction = false;
    
video.addEventListener('ended', function() {
    if (isUserInteraction) {
        loadingOverlay.classList.add('active');
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 2000);
    }
});
    
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        loadingOverlay.classList.remove('active');
    }, 2000); 
});
    
document.addEventListener('click', function() {
    isUserInteraction = true;
    playVideo();
});
    
document.addEventListener('keydown', function() {
    isUserInteraction = true;
    playVideo();
});
    
function playVideo() {
    video.play().catch(function(error) {
        if (error.name === 'NotAllowedError') {
            video.addEventListener('click', playVideo); 
        }
    });
}