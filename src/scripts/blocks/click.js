import Swiper from 'swiper'

const clickSlider = (elemName) => {
  document.querySelectorAll(elemName).forEach(elem => {
    new Swiper(elem, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: false,
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },
    })
  })
}

export { clickSlider }
