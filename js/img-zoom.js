const projectPics = document.querySelectorAll('img');
projectPics.forEach((pic)=>{
    pic.addEventListener('click', () => {
        const picZoom = document.getElementById('pic-zoom');

        if(picZoom.style.display = "none") {
            picZoom.style.display = "flex";
            document.getElementById('zoomed-pic').src = pic.src;
        }
    });
});

document.getElementById('pic-zoom-close').addEventListener('click', () => {
    document.getElementById('pic-zoom').style.display = "none";
});

document.addEventListener('keydown', (e) => {
if (e.key === 'Escape') {
        document.getElementById('pic-zoom').style.display = "none";
    }
});