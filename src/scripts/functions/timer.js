function countdownTimer(elements) {
  const timers = document.querySelectorAll(elements)

  timers.forEach((timer) => {
    let timeObj = new Date();
    const timeAttr = timer.getAttribute("data-timer") || "0"
    timeObj.setSeconds(timeObj.getSeconds() + Number(timeAttr))

    if (isNaN(timeObj)) {
      console.error("Invalid date or time in data attributes:", timeObj, timeAttr)
      return
    }

    const swapNumbers = (element, value, type) => {
      const elem = element.querySelector(`.timer--${type}`)

      elem.textContent = value
    }

    const updateCountdown = () => {
      const now = new Date()
      const difference = timeObj - now

      if (difference <= 0) {
        clearInterval(interval);
        timer.querySelectorAll(".timer-number > span").forEach((span) => (span.textContent = "00"))
        return
      }

      // const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0")
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0")
      const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, "0")

      // swapNumbers(timer.querySelector(".timer-hours"), hours, "hours");
      swapNumbers(timer.querySelector(".timer--minutes").parentElement, minutes, "minutes")
      swapNumbers(timer.querySelector(".timer--seconds").parentElement, seconds, "seconds")
    }

    const interval = setInterval(updateCountdown, 1000)
    updateCountdown()
  })
}

export { countdownTimer }
