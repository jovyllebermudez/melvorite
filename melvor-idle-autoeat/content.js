(() => {

  const maxElementId = "#combat-player-hitpoints-max-1"
  const currentElementId = "#combat-player-hitpoints-current-1"
  const eatElementId = "#combat-footer-minibar-eat-btn"

  const interval = 4000 // 2000 milliseconds = 2 seconds
  const heathRatio = 0.8 // 70% health, eat when health is below this

  let eatElement = document.querySelector(eatElementId)
  function startEating () {
    if (isReadyToEat()) {
      console.log("AutoEat eating!");
      eatElement.click();
    } else {
      // console.log("AutoEat no ready to eat!");
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
      const ratio = current / max;
      if (ratio < heathRatio) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function startLoopCheck () {
    // console.log("AutoEat start the loop check!");
    setInterval(() => { // 2000 milliseconds = 2 seconds
      startEating();
    }, interval);
  }

  function checkIfGmaeLoaded () {
    const loaderElement = document.querySelectorAll("#m-page-loader.d-none");
    if (loaderElement.length > 0) {
      // if the variables are ready. start checking for loot to loot
      startLoopCheck();
    } else {
      // Continue checking until the variable is defined
      setTimeout(checkIfGmaeLoaded, 2000); // Check every 2 seconds
    }
  }

  // Start checking for the variable
  console.log("AutoEat started!");
  checkIfGmaeLoaded();


})();