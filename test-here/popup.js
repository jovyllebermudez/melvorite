// popup.js
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#click-button");

  if (button) {
    button.addEventListener("click", () => {
      alert('i clicked the button');
      chrome.runtime.sendMessage({ action: "clickButton" });
    });
  }
});
