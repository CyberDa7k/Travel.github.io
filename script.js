let slideIndex = 0
let settings = {
    duration: '2000'
}
let slider = [{
        image: 'img/iceriseher.jpg',
        link: 'http://www.traveloazerbaijan.com/images/home/1403626037!!-!!azerbaijan_h3.jpg'
    },
    {
        image: 'img/slider2.jpg',
        link: 'http://www.traveloazerbaijan.com/images/home/1403626037!!-!!azerbaijan_h3.jpg'
    },
    {
        image: 'img/slider3.jpg',
        link: 'http://www.traveloazerbaijan.com/images/home/1403626037!!-!!azerbaijan_h2.jpg'
    }
]
let indexCount = slider.length



function showSlide(i) {

    slideIndex = i
    if (i < 0) {
        slideIndex = indexCount - 1

    }
    if (i > indexCount - 1) {
        slideIndex = 0
    }
    document.querySelector('.slider-image').setAttribute('src', slider[slideIndex].image)
}
showSlide(slideIndex)

function next() {
    slideIndex++;
    showSlide(slideIndex)
    console.log(slideIndex);
}


document.querySelector('.fa-angle-double-left').addEventListener('click', function() {
    slideIndex--;
    showSlide(slideIndex)
    console.log(slideIndex);
})
document.querySelector('.fa-angle-double-right').addEventListener('click', next)
setInterval(next, 2000)