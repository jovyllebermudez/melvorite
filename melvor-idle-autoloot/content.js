(() => {
  // const lootButton1 = "#combat-loot button.btn.btn-sm.btn-success";
  const lootButton2 = '#combat-loot lang-string[lang-id="COMBAT_MISC_46"]';

  // Function to click the element
  function autoLootHandler () {
    const element = document.querySelector(lootButton2);
    const numberOfLoots = document.querySelectorAll("#combat-loot .bank-item.no-bg.btn-light.pointer-enabled").length
    if (element && numberOfLoots > 0) {
      element.parentElement.click();
    }
  }
  function theTick () {
    console.log("Autoloot is ticking!")
    autoLootHandler();
  }

  function tickHandler () {
    // Set up an interval to click the button every minute (60000 milliseconds)
    setInterval(theTick, 30000); // 30000 milliseconds = 30 seconds
  }

  function checkIfGmaeLoaded () {
    const loaderElement = document.querySelectorAll("#m-page-loader.d-none");
    if (loaderElement.length > 0) {
      debugger
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