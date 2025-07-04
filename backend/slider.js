$(document).ready(function () {
    const images = [
        "imgs/resume-genius-72D3z_LfrQA-unsplash.jpg",
        "imgs/the-jopwell-collection-Y4uoL2SIGUQ-unsplash.jpg",
        "imgs/resume-genius-IESB4iFVuzA-unsplash.jpg",
        "imgs/andrew-neel-cckf4TsHAuw-unsplash.jpg"
    ];

    let currentIndex = 0;

    function changeBackground() {
        $(".slider-bg").css("background-image", `url(${images[currentIndex]})`);
        currentIndex = (currentIndex + 1) % images.length;
    }

    changeBackground(); // first image
    setInterval(changeBackground, 3000); // change every 3s
});