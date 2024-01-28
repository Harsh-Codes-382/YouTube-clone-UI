let videoplayer = document.querySelector('#video-player');
const videos = document.querySelectorAll('.video-options');

videos.forEach((videol)=>{
    videol.addEventListener('mouseover', () => {
        videol.play();
    })
    videol.addEventListener('mouseout', () => {
        videol.pause();
        videol.currentTime = 0;
    })
    videol.addEventListener('click',()=>{
        localStorage.setItem('video',videol.src);
    })
})
videoplayer.src =  localStorage.getItem('video');;
videoplayer.play();