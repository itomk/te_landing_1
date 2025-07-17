import Swiper from 'swiper'

const eventsSlider = (elemName) => {
  document.querySelectorAll(elemName).forEach(elem => {
    new Swiper(elem, {
      slidesPerView: 'auto',
      spaceBetween: 25,
      loop: false,
    })
  })
}

export { eventsSlider }
