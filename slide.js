document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slide-img")
    let currentIndex = 0;
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active")
            if(i === index) {
                slide.classList.add("active")
            }
        })
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length 
        showSlide(currentIndex);
    }

    showSlide(currentIndex)

    setInterval(nextSlide, 3000)
})
