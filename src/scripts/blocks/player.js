import Swiper from 'swiper'

const controlMusic = (btnPp, itemClass) => {
  document.querySelectorAll(btnPp).forEach(btnElem => {
    btnElem.addEventListener('click', (e) => {
      const coreElement = e.target.closest(itemClass)
      const iconElem = (e.target.tagName != 'use') ? e.target.querySelector('use') : e.target
      const iconIsElem = iconElem.getAttribute('xlink:href').toLowerCase().indexOf('play')
      const audioElem = coreElement.querySelector('audio')
      const controlPanel = coreElement.querySelector('.m-player__bar')

      if (audioElem) {
        (audioElem.paused) ? audioElem.play() : audioElem.pause()

        if (controlPanel.style.display !== 'block')
          controlPanel.style.display = 'block'

        audioElem.addEventListener('timeupdate', () => {
          let playPercent = (audioElem.currentTime || audioElem.duration) ? 100 * ( audioElem.currentTime / audioElem.duration ) : 0

          controlPanel.style.setProperty('--cur-time', playPercent.toFixed(2) + '%')
        }, false)
      }

      iconElem.setAttribute('xlink:href', iconElem.getAttribute('xlink:href').replace(
        (iconIsElem >= 0) ? 'play' : 'pause', 
        (iconIsElem >= 0) ? 'pause' : 'play'
      ))
    })
  })
}

const controlMusicStop = (itemClass) => {
  document.querySelectorAll(itemClass).forEach(itemElement => {
    const iconElem = itemElement.querySelector('use')
    const iconIsElem = iconElem.getAttribute('xlink:href').toLowerCase().indexOf('pause')
    const audioElem = itemElement.querySelector('audio')
    const controlPanel = itemElement.querySelector('.m-player__bar')

    if (audioElem) {
      if (!audioElem.paused) {
        audioElem.pause()
        audioElem.currentTime = 0
      }

      if (controlPanel.style.display == 'block')
        controlPanel.style.display = 'none'
    }

    if (iconIsElem >= 0)
      iconElem.setAttribute('xlink:href', iconElem.getAttribute('xlink:href').replace('pause', 'play'))
  })
}

const controlLike = (btnLike) => {
  document.querySelectorAll(btnLike).forEach(btnElem => {
    btnElem.addEventListener('click', (e) => {
      const btnElem = (e.target.tagName != 'button') ? e.target.closest('button') : e.target

      btnElem.classList.toggle('_active')
    })
  })
}

const playerSlider = (elemName, itemName) => {
  document.querySelectorAll(elemName).forEach(elem => {
    new Swiper(elem, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      direction: 'horizontal',
      breakpoints: {
        769: {
          direction: 'vertical',
        },
      },
      on: {
        slideChangeTransitionStart: () => {
          controlMusicStop(itemName)
        },
      },
    })
  })
}

export { playerSlider, controlMusic, controlLike }
