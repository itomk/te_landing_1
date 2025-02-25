import gsap, { Timeline } from 'gsap'

/**
 * Открытие моб меню с помощью кнопки
 * 
 * @param {String} btn - селектор кнопки
 * @param {String} menu - селектор меню
 * @param {Boolean} [text_btn=true] - тип кнопки
 * @returns {Element} Элемент кнопки
 */
export const menuMobile = (btn, menu, text_btn = true) => {
  let state = {
    closed: true,
    text_btn: text_btn
  }

  const toggleElem = document.querySelector(btn)
  const menuElem = document.querySelector(menu)

  const renderTextBtn = () => {
    const toggleTextShow = toggleElem.getAttribute('data-text-show')
    const toggleTextHide = toggleElem.getAttribute('data-text-hide')

    state.closed ?
      toggleElem.textContent = toggleTextShow :
      toggleElem.textContent = toggleTextHide
  }

  const default_timeline = gsap.timeline({
    ease: 'easeInOut',
    paused: true,
    reversed: true
  })

  const burger_timeline = () => {
    default_timeline.to(toggleElem.querySelector('span:nth-child(2)'), {
      x: '50%',
      width: 0
    })
    console.log(default_timeline);
  }

  toggleElem.addEventListener('click', () => {
    state.closed = !state.closed
    toggleElem.classList.toggle('active')
    menuElem.classList.toggle('open')
    burger_timeline()
    state.text_btn && renderTextBtn()
  })

  return toggleElem
}
