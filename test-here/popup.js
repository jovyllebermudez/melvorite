// popup.js
document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('#click-button')

  if (button) {
    button.addEventListener('click', () => {
      // alert('i clicked the button')
      // eslint-disable-next-line
      chrome.runtime.sendMessage({ action: 'clickButton' })
    })
  }
})
