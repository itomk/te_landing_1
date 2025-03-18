const toggle_top_btn = (elem_name = "[data-scroll-top]") => {
  const scroll_number = window.scrollY || document.documentElement.scrollTop

  document.querySelector(elem_name).style.cssText =
    scroll_number > 500
      ? "transform: translateY(0)"
      : "transform: translateY(150%)"
}

const scroll_top_btn = (elem_name = "[data-scroll-top]") => {
  document.querySelector(elem_name).addEventListener('click', (e) => {
    e.preventDefault()

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  })
}

export { toggle_top_btn, scroll_top_btn }
