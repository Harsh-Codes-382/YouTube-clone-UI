const menu = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const shortcut_links = document.querySelectorAll('.shortcut-links a');
const videos = document.querySelectorAll('.thumbnail');




videos.forEach((video) => {
    video.addEventListener('mouseover', () => {
        video.play();
    })
    video.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0;
    })
    video.addEventListener('click', () => {
        localStorage.setItem('video', video.src);
    })
})



menu.addEventListener('click', () => {
    sidebar.classList.toggle('small-sidebar');
    document.querySelector('.container').classList.toggle('large-container')
})

shortcut_links.forEach((i) => {
    i.addEventListener('mouseover', () => {
        i.classList.add('active');
    })
    i.addEventListener('mouseout', () => {
        i.classList.remove('active');
    })
})