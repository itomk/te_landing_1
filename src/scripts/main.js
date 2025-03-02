import { vhSetFix } from './functions/vh-fix.js'
import { countdownTimer } from './functions/timer.js'
import { reviewSlider } from './blocks/review.js'
import { runLine, cuteControlElement } from './blocks/hero.js'
import InitModal from './blocks/modal.js'

window.addEventListener('DOMContentLoaded', () => {
  vhSetFix()

  // Running line for Hero section
  if (document.getElementById('heroLine'))
    runLine('#heroLine')

  // Move control block in Hero section
  if (document.querySelector('.hero__control') && document.querySelector('.hero__wrapper') && document.querySelector('.hero__main'))
    cuteControlElement('.hero__control', '.hero__wrapper', '.hero__main')

  // Slider for Review block
  if (document.querySelectorAll('.review-slider').length)
    reviewSlider('.review-slider')

  // Timer for Promo section
  if (document.querySelectorAll('[data-timer]'))
    countdownTimer('[data-timer]')

  // Init modals on page
  new InitModal('modal-dga', 'data-bs-target', 7000, 'modal_dga_is_opened', 1)

  window.addEventListener('load', () => {
    return true
  })
})
