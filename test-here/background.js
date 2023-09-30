// Define the interval (in milliseconds) at which to send messages (e.g., every 30 seconds).
const intervalInMilliseconds = 2000 // 2 seconds // eat cheacking interval
const lootInterval = 60000 // 60 seconds // loot checking interval

// background.js
// eslint-disable-next-line
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'clickButton') {
    // debugger

    // eslint-disable-next-line
    chrome.tabs.query({}, (tabs) => {
      const targetDomain = 'melvoridle.com' // Replace with your target domain
      // Query tabs and filter by URL matching the target domain.
      // eslint-disable-next-line
      chrome.tabs.query({ url: `*://${targetDomain}/*` }, (tabs) => {
        tabs.forEach((tab) => {
          try {
            // eslint-disable-next-line
            chrome.tabs.sendMessage(tab.id, { action: 'test' }, (response) => {
              // eslint-disable-next-line
              if (chrome.runtime.lastError) {
                // Handle any error that occurred during message sending.
                // eslint-disable-next-line
                console.log('chrome.runtime.lastError:', chrome.runtime.lastError)
              } else {
                // Handle the response from the content script if needed.
                console.log('Message sent successfully:', response)
              }
            })
          } catch (error) {
            // Handle any error that occurred during the try-catch block.
            console.error('trycatch')
            console.error(error)
          }
        })
      })
      // tabs.forEach((tab) => {
      //   chrome.tabs.sendMessage(tab.id, { action: "toContent" });
      // });
    })
    console.log('background.js')
  }
})

// Define the function to send a message to tabs.
function tryToEat () {
  doTheAction('autoeat')
}
// Define the function to send a message to tabs.
function tryToLoot () {
  doTheAction('autoloot')
}

// Define the function to send a message to tabs.
function doTheAction (actionStr) {
  // console.log('tryToEat')
  // eslint-disable-next-line
  chrome.tabs.query({ url: 'https://melvoridle.com/*' }, (tabs) => {
    tabs.forEach((tab) => {
      try { // eslint-disable-next-line
        chrome.tabs.sendMessage(tab.id, { action: actionStr }, (response) => {// eslint-disable-next-line
          if (chrome.runtime.lastError) {
            // Handle any error that occurred during message sending.
            // console.log("chrome.runtime.lastError:", chrome.runtime.lastError);
          } else {
            // Handle the response from the content script if needed.
            // console.log("Message sent successfully:", response);
          }
        })
      } catch (error) {
        // Handle any error that occurred during the try-catch block.
        console.error('trycatch')
        console.error(error)
      }
    })
  })
}

// Set up a recurring timer to send messages at the specified interval.
setInterval(tryToEat, intervalInMilliseconds)
setInterval(tryToLoot, lootInterval)

// Initial call to send messages immediately when the extension loads.
tryToEat()
tryToLoot()
console.log('Melvorite Background Started')
