import Swiper from "swiper"
import { Autoplay } from "swiper/modules"
import { throttle } from "../functions/throttle.js"

const runLine = (elementId) => {
  new Swiper(elementId, {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 5,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
    },
    breakpoints: {
      993: {
        spaceBetween: 8,
      },
      1281: {
        spaceBetween: 9,
      },
      1441: {
        spaceBetween: 11,
      },
      1781: {
        spaceBetween: 12,
      }
    },
    speed: 8000,
    modules: [Autoplay],
  })
}

const cuteControlElement = (el, mobParentEl, pcParentEl) => {
  const pushElement = () => {
    const childEl = document.querySelector(el)
    const mobEl = document.querySelector(mobParentEl)
    const pcEl = document.querySelector(pcParentEl)

    if (window.innerWidth >= 993 && document.querySelector(`${mobParentEl} > ${el}`))
      pcEl.appendChild(childEl)
    else if (window.innerWidth < 993 && document.querySelector(`${pcParentEl} > ${el}`))
      mobEl.appendChild(childEl)
  }

  window.addEventListener('resize', throttle(pushElement, 100), true)
  pushElement()
}

export { runLine, cuteControlElement }
