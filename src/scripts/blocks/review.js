import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'

const reviewSlider = (elemName) => {
  document.querySelectorAll(elemName).forEach(elem => {
    new Swiper(elem, {
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: true,
      loop: true,
      breakpoints: {
        769: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        993: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1441: {
          slidesPerView: 3,
          spaceBetween: 35,
        },
        1781: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      },
      navigation: {
        nextEl: elem.parentElement.querySelector('.review-slider-next'),
        prevEl: elem.parentElement.querySelector('.review-slider-prev'),
      },
      autoplay: {
        delay: 6000,
      },
      modules: [Navigation, Autoplay],
    })
  })
}

export { reviewSlider }
