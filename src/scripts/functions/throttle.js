function throttle(funcs, delay = 250) {
  let isThrottled = null

  return (...args) => {
    if (isThrottled === null) {
      funcs(...args)
      isThrottled = setTimeout(() => {
        isThrottled = null
      }, delay)
    }
  }
}

export { throttle }
