import { vhSetFix } from './functions/vh-fix.js'
import { countdownTimer } from './functions/timer.js'


window.addEventListener('DOMContentLoaded', () => {
  vhSetFix()

  // Timer for Promo section
  if (document.querySelectorAll('[data-timer]'))
    countdownTimer('[data-timer]')


  window.addEventListener('load', () => {
    return true
  })
})
