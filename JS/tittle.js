const dynamicTextElement = document.querySelector('#dynamic-text');

const messages  = ["🎉 Let's Party! 🎉","🎇 Party Vibes! 🎇"];

let messageIndex = 0;


function updateDynamicText() {
    dynamicTextElement.innerText = messages[messageIndex]; 
    messageIndex = (messageIndex + 1) % messages.length;
}
    
 setInterval(updateDynamicText, 1000);
