import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'

const anonymSlider = (elemName) => {
  document.querySelectorAll(elemName).forEach(elem => {
    new Swiper(elem, {
      slidesPerView: 1,
      spaceBetween: 15,
      loopAdditionalSlides: 2,
      autoHeight: true,
      loop: true,
      breakpoints: {
        769: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
      autoplay: {
        delay: 6000,
      },
      modules: [Autoplay],
    })
  })
}

export { anonymSlider }
