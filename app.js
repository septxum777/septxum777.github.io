// app.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

const audio = new Audio('lovelooksprettyonyou.mp3');
const playPauseButton = document.getElementById('play-pause');
const playPauseIcon = playPauseButton.querySelector('i');
const progressBar = document.querySelector('.progress-bar');
const progressContainer = document.querySelector('.progress-container');
const currentTimeElement = document.querySelector('.current-time');
const durationElement = document.querySelector('.duration');

let isPlaying = false;

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseIcon.classList.remove('fa-circle-pause');
        playPauseIcon.classList.add('fa-circle-play');
    } else {
        audio.play();
        playPauseIcon.classList.remove('fa-circle-play');
        playPauseIcon.classList.add('fa-circle-pause');
    }
    isPlaying = !isPlaying;
}

function updateProgressBar() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
    currentTimeElement.textContent = formatTime(audio.currentTime);
}

function setProgress(e) {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

audio.addEventListener('timeupdate', updateProgressBar);
audio.addEventListener('loadedmetadata', () => {
    durationElement.textContent = formatTime(audio.duration);
});
playPauseButton.addEventListener('click', togglePlayPause);
progressContainer.addEventListener('click', setProgress);
