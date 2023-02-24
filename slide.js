const slides = document.querySelectorAll(".slide")

slides.forEach(
    (slide, index) => {
        slide.style.top = `${index * 100}%`
    }
)

var counter = 0;

const goPrev = () => {
    if (counter <= 0) {
        counter = 3
    }
    else {
        counter--
    }
    slideImage()
}
const goNext = () => {
    if (counter >= 3) {
        counter = 0
    }
    else {
        counter++
    }
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translatey(-${counter * 100}%)`
        }
    )
}