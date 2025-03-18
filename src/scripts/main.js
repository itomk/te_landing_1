import { vhSetFix } from './functions/vh-fix.js'
import { countdownTimer } from './functions/timer.js'
import { toggle_top_btn, scroll_top_btn } from './functions/top-link.js'
import { throttle } from './functions/throttle.js'
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
  if (document.getElementById('modal-dga'))
    new InitModal('modal-dga', 'data-bs-target', 7000, 'modal_dga_is_opened', 1)

  // Init button scroll to top
  if (document.querySelectorAll("[data-scroll-top]").length) {
    const throttle_show_fixed_buttons = throttle(toggle_top_btn)

    throttle_show_fixed_buttons()
    scroll_top_btn()
    window.addEventListener("scroll", () => throttle_show_fixed_buttons(), { passive: true })
  }

  window.addEventListener('load', () => {
    return true
  })
})
