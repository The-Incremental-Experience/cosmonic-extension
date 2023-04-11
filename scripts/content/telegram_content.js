console.log("telegram");

function getElements() {
  console.log("getting elements");
  coreHTML = document.querySelector("html");
  messageWrapper = document.querySelector("div[class=message-input-wrapper]");
  if (messageWrapper)
    messageBox = messageWrapper.querySelector("div[id=editable-message-text]");
}

function getMessageBoxContent() {
  if (messageWrapper)
    messageBox = messageWrapper.querySelector("div[id=editable-message-text]");
  return messageBox ? messageBox.textContent : "";
}

function writeMessageBoxContent(textInput) {
  messageBox.textContent = textInput;
  if (!messageBox.classList.contains("touched")) {
    messageBox.classList.add("touched");
  }
}
