import Swiper from 'swiper'

const anonymSlider = (elemName) => {
  document.querySelectorAll(elemName).forEach(elem => {
    new Swiper(elem, {
      slidesPerView: 1,
      spaceBetween: 15,
      autoHeight: true,
      loop: false,
      breakpoints: {
        769: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
    })
  })
}

export { anonymSlider }
