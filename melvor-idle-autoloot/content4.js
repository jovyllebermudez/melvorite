// ==UserScript==
(() => {
  // test change
  // const lootButton1 = "#combat-loot button.btn.btn-sm.btn-success";
  const lootButton2 = '#combat-loot lang-string[lang-id="COMBAT_MISC_46"]'
  const interval = 60000 // 60000 milliseconds = 60 seconds

  let lootElement = null

  function startLooting () {
    if (isReadyToLoot()) {
      console.log('Melvor 1.2 AutoLooter looting!')
      lootElement.parentElement.click()
    } else {
      // console.log("Melvor 1.2 AutoLooter no ready to loot!");
    }
  }

  function isReadyToLoot () {
    lootElement = document.querySelector(lootButton2)
    const numberOfLoots = document.querySelectorAll('#combat-loot .bank-item.no-bg.btn-light.pointer-enabled').length
    if (lootElement && numberOfLoots > 0) {
      return true
    } else {
      return false
    }
  }

  function startLoopCheck () {
    // console.log("Melvor 1.2 AutoLooter start the loop check!");
    setInterval(() => { // 2000 milliseconds = 2 seconds
      startLooting()
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

  console.log('Melvor 1.2 AutoLooter loading...')
  // Start checking for the variable
  console.log('Melvor 1.2 AutoLooter started!')
  checkIfGmaeLoaded()
  return null
})()
