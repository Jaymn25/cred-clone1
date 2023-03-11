
const section5 = document.querySelector('.section-5')

const section5Left1 = document.querySelector('.section-5-left-1')
const section5Left2 = document.querySelector('.section-5-left-2')
const section5Left3 = document.querySelector('.section-5-left-3')
const section5Left4 = document.querySelector('.section-5-left-4')

const section5RightImg = document.querySelector('.section-5-right-img')

const section5RightImg1 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png";
const section5RightImg2 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png";
const section5RightImg3 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png";
const section5RightImg4 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png";

// add scroll event listener
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
    const section5OffsetTop = section5.offsetTop
    const section5Height = section5.clientHeight

    if ((scrollPosition > section5OffsetTop) && (scrollPosition < section5Height + section5OffsetTop)) {
        if (scrollPosition > section5OffsetTop && scrollPosition < section5OffsetTop + 300) {
            section5Left1.style.opacity = 1
            section5Left1.style.transition = 'opacity 1s ease-in-out'
        } else if (scrollPosition > section5OffsetTop + innerHeight && scrollPosition < section5OffsetTop + innerHeight + 300) {
            section5Left2.style.opacity = 1
            section5Left2.style.transition = 'opacity 1s ease-in-out'
        } else if (scrollPosition > section5OffsetTop + innerHeight * 2 && scrollPosition < section5OffsetTop + innerHeight * 2 + 300) {
            section5Left3.style.opacity = 1
            section5Left3.style.transition = 'opacity 1s ease-in-out'
        } else if (scrollPosition > section4OffsetTop + innerHeight * 3 && scrollPosition < section5OffsetTop + innerHeight * 3 + 300) {
            section5Left4.style.opacity = 1
            section5Left4.style.transition = 'opacity 1s ease-in-out'
        } else {
            section5Left1.style.opacity = 0
            section5Left2.style.opacity = 0
            section5Left3.style.opacity = 0
            section5Left4.style.opacity = 0
        }

        if (scrollPosition > section5OffsetTop && scrollPosition < section5OffsetTop + innerHeight) {
            section5RightImg.src = section5RightImg1
            section5RightImg.style.transition = 'opacity 1s ease-in-out'
        } else if (scrollPosition > section5OffsetTop + innerHeight && scrollPosition < section5OffsetTop + innerHeight * 2) {
            section5RightImg.src = section5RightImg2
            section5RightImg.style.transition = 'opacity 1s ease-in-out'
        } else if (scrollPosition > section5OffsetTop + innerHeight * 2 && scrollPosition < section5OffsetTop + innerHeight * 3) {
            section5RightImg.src = section5RightImg3
            section5RightImg.style.transition = 'opacity 1s ease-in-out'
        } else if (scrollPosition > section5OffsetTop + innerHeight * 3 && scrollPosition < section5OffsetTop + innerHeight * 4) {
            section5RightImg.src = section5RightImg4
            section5RightImg.style.transition = 'opacity 1s ease-in-out'
        } else {
            section5RightImg.src = section5RightImg1
        }
    }
})
