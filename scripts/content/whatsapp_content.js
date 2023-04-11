console.log("whatsapp");

function getElements() {
  console.log("getting elements");
  coreHTML = document.querySelector("html");
  messageWrapper = document.querySelector("div[class=_1VZX7]");
  if (messageWrapper) messageBox = messageWrapper.querySelector("p");
}

function getMessageBoxContent() {
  if (messageWrapper) messageBox = messageWrapper.querySelector("p");
  return messageBox.textContent;
}

function writeMessageBoxContent(textInput) {
  if (messageWrapper) messageBox = messageWrapper.querySelector("p");
  console.log(messageWrapper);
  console.log(messageBox);
}
