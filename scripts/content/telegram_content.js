console.log("telegram");

function getElements() {
  console.log("getting elements");
  coreHTML = document.querySelector("html");
  messageWrapper = document.querySelector("div[class=message-input-wrapper]");
  if (messageWrapper)
    messageBox = messageWrapper.querySelector("div[id=editable-message-text]");
}
