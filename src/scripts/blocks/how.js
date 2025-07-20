import Swiper from 'swiper'

const howSlider = (elemName) => {
  document.querySelectorAll(elemName).forEach(elem => {
    new Swiper(elem, {
      slidesPerView: 'auto',
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

export { howSlider }
