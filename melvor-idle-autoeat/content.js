(() => {

  // Function to click the element
  function autoEatHandler () {
    
    const maxElement = document.querySelector("#combat-player-hitpoints-max-1")
    const currentElement = document.querySelector("#combat-player-hitpoints-current-1")
    const eatElement = document.querySelector("#combat-footer-minibar-eat-btn")
    if (maxElement && currentElement && eatElement) {


      const max = parseInt(maxElement.textContent)

      const current = parseInt(currentElement.textContent)

      const ratio = current / max;

      if (ratio < 0.8) {
        eatElement.click();
        console.log("hp low eating");
      } else {
        console.log("hp high");
      }
    }
  }
  function theTick () {
    console.log("AutoEat is ticking!")
    autoEatHandler();
  }

  function tickHandler () {
    // Set up an interval to click the button every minute (60000 milliseconds)
    setInterval(theTick, 3000); // 5000 milliseconds = 5 seconds
  }

  function checkIfGmaeLoaded () {
    const loaderElement = document.querySelectorAll("#m-page-loader.d-none");
    if (loaderElement.length > 0) {
      // debugger
      // if the variables are ready. start checking for loot to loot
      tickHandler();
    } else {
      // Continue checking until the variable is defined
      setTimeout(checkIfGmaeLoaded, 2000); // Check every 2 seconds
    }
  }
  // Start checking for the variable
  checkIfGmaeLoaded();

})();