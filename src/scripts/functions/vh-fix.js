import { throttle } from './throttle.js'

const vhSet = () => {
  let vhPx = parseFloat((window.innerHeight * 0.01).toFixed(2))
  let vhChange = document.querySelector(':root').style.setProperty('--vh', `${vhPx}px`);
  throttle(vhChange)
}

const vhSetFix = () => {
  vhSet()
  window.addEventListener('resize', () => vhSet())
}

export { vhSetFix }
