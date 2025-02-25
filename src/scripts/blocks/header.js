import { throttle } from '../functions/throttle.js'
import { menuMobile } from '../functions/mobile-menu.js'

const setHeaderHeight = (elem_name = 'header.header') => {
  let headerHeight = parseFloat(document?.querySelector(`${elem_name}`).offsetHeight.toFixed(2))

  let headerHeightChange = document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`)
  throttle(headerHeightChange)
}

const headerInit = () => {
  setHeaderHeight()
  menuMobile('.menu-toggle', '.menu', false)

  window.addEventListener('resize', () => setHeaderHeight())
}

export { headerInit }
