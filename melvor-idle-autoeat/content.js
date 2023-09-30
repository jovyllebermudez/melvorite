(() => {
  const maxElementId = '#combat-player-hitpoints-max-1'
  const currentElementId = '#combat-player-hitpoints-current-1'
  const eatElementId = '#combat-footer-minibar-eat-btn'

  const interval = 2500 // in milliseconds, 2000 = 2 seconds
  const lowHealth = 0.4 // 0.4 = 40% health, eat when health is below this
  const enoughHealth = 0.9 // 0.9 = 90% health, eat when health is below this
  let counter = 0

  let eatElement = document.querySelector(eatElementId)
  function startEating () {
    if (isReadyToEat()) {
      console.log('Melvor 1.2 Autoeater eating!')
      rapidEat()
    } else {
      // console.log("Melvor 1.2 Autoeater no ready to eat!");
    }
  }

  function rapidEat () {
    const maxElement = document.querySelector(maxElementId)
    const currentElement = document.querySelector(currentElementId)

    if (maxElement && currentElement && eatElement) {
      // console.log(currentElement.textContent + "is current life")
      // console.log(maxElement.textContent + "is max life")

      const max = parseInt(maxElement.textContent)
      const current = parseInt(currentElement.textContent)
      const currentRatio = current / max
      // console.log("Melvor 1.2 Autoeater counter=" + counter + " max=" + max + " current=" + current + " currentRatio=" + currentRatio)
      if (currentRatio < enoughHealth && counter < 15) { // counter < 15 is to prevent infinite loop
        counter++ // increment counter
        eatElement.click()
        rapidEat()
      } else {
        counter = 0
      }
    } else {
      counter = 0
    }
  }

  function isReadyToEat () {
    const maxElement = document.querySelector(maxElementId)
    const currentElement = document.querySelector(currentElementId)
    eatElement = document.querySelector(eatElementId)

    if (maxElement && currentElement && eatElement) {
      // console.log(currentElement.textContent + "is current life")
      // console.log(maxElement.textContent + "is max life")

      const max = parseInt(maxElement.textContent)
      const current = parseInt(currentElement.textContent)
      const ratio = current / max
      if (ratio < lowHealth) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  function startLoopCheck () {
    // console.log("Melvor 1.2 Autoeater start the loop check!");
    setInterval(() => { // 2000 milliseconds = 2 seconds
      startEating()
    }, interval)
  }

  function checkIfGmaeLoaded () {
    const loaderElement = document.querySelectorAll('#m-page-loader.d-none')
    if (loaderElement.length > 0) {
      // if the variables are ready. start checking for loot to loot
      startLoopCheck()
    } else {
      // Continue checking until the variable is defined
      setTimeout(checkIfGmaeLoaded, 2000) // Check every 2 seconds
    }
  }

  // Start checking for the variable
  console.log('Melvor 1.2 Autoeater started!')
  checkIfGmaeLoaded()
})()
