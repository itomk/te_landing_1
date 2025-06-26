import Swiper from 'swiper'

const etapSlider = (elemName) => {
  document.querySelectorAll(elemName).forEach(elem => {
    new Swiper(elem, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,
      breakpoints: {
        600: {
          slidesPerView: 2,
        },
        993: {
          slidesPerView: 3,
        }
      },
    })
  })
}

export { etapSlider }
