// content.js

function nowLoot () {
  const lootButtonSelector = '#combat-loot lang-string[lang-id="COMBAT_MISC_46"]';
  const lootElement = document.querySelector(lootButtonSelector);
  const numberOfLoots = document.querySelectorAll("#combat-loot .bank-item.no-bg.btn-light.pointer-enabled").length;

  if (lootElement && numberOfLoots > 0) {
    console.log("Melvor 1.2 AutoLooter looting!");
    lootElement.parentElement.click();
    return "Melvor 1.2 AutoLooter looting";
  } else {
    console.log("Melvor 1.2 AutoLooter Looting Not Ready!");
    return "Melvor 1.2 AutoLooter Not Ready";
  }
}


function nowEat () {


  const maxElementId = "#combat-player-hitpoints-max-1"
  const currentElementId = "#combat-player-hitpoints-current-1"
  const eatElementId = "#combat-footer-minibar-eat-btn"

  const lowHealth = 0.4 // 0.4 = 40% health, eat when health is below this
  const enoughHealth = 0.9 // 0.9 = 90% health, eat when health is below this
  let counter = 0;

  let eatElement = document.querySelector(eatElementId)

  const maxElement = document.querySelector(maxElementId)
  const currentElement = document.querySelector(currentElementId)
  eatElement = document.querySelector(eatElementId)



  function rapidEat () {
    const maxElement = document.querySelector(maxElementId)
    const currentElement = document.querySelector(currentElementId)

    if (maxElement && currentElement && eatElement) {

      // console.log(currentElement.textContent + "is current life")
      // console.log(maxElement.textContent + "is max life")

      const max = parseInt(maxElement.textContent)
      const current = parseInt(currentElement.textContent)
      const currentRatio = current / max;
      // console.log("Melvor 1.2 Autoeater counter=" + counter + " max=" + max + " current=" + current + " currentRatio=" + currentRatio)
      if (currentRatio < enoughHealth && counter < 15) { // counter < 15 is to prevent infinite loop
        counter++; // increment counter
        eatElement.click();
        rapidEat();
      } else {
        counter = 0;
      }
    } else {
      counter = 0;
    }
  }
  if (maxElement && currentElement && eatElement) {

    // console.log(currentElement.textContent + "is current life")
    // console.log(maxElement.textContent + "is max life")

    const max = parseInt(maxElement.textContent)
    const current = parseInt(currentElement.textContent)
    const ratio = current / max;
    if (ratio < lowHealth) {
      console.log("Melvor 1.2  Eating!");
      rapidEat();
    } else {
      console.log("Melvor 1.2  Not Eating!");
    }
  } else {
    console.log("Melvor 1.2  Not Eating!");
  }

}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "test") {
    alert('Hi Just HII');
    // console.log('content.js');
    // // Replace 'button-selector' with the actual selector of the button you want to click.
    // const button = document.querySelector('#resumebutton');
    // if (button) {
    //   button.remove();
    // }

    sendResponse("test action done");
  }
  if (message.action === "autoloot") {
    // console.log("autoloot came here on content.js");
    const res = nowLoot();
    sendResponse(res);
  }
  if (message.action === "autoeat") {
    nowEat();
    sendResponse("autoeat action done");
  }
});
