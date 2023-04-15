function addContent() {
  getElements();
  if (messageWrapper && messageBox) {
    // add anchor and main content
    popupAnchor = document.createElement("button");
    popupAnchor.classList.add("mextension-main-button");
    popupAnchor.textContent = "mextension-main-button";
    popup = document.createElement("div");
    popup.classList.add("mextension-main-popup");
    popup.innerHTML = `
      mextension-main-popup
      <label class="mextension-input-container">
        <input id="mextension-input"/>
      </label>
      <div class="mextension-button-container">
        <button class="mextension-arrow-button" id="mextension-upload-text-button"/>
        <button class="mextension-button" id="mextension-button1">translate</button>
        <button class="mextension-button" id="mextension-button2">not working</button>
        <button class="mextension-arrow-button" id="mextension-copy-text-button"/>
      </div>`;
    messageWrapper.appendChild(popupAnchor);
    messageWrapper.appendChild(popup);

    // event listeners
    popupAnchor.addEventListener("mousedown", () => {
      toggleMainPopup();
    });
    input = messageWrapper.querySelector("input[id=mextension-input]");
    popup
      .querySelector("button[id=mextension-upload-text-button]")
      .addEventListener("mousedown", () => {
        input.value = getMessageBoxContent();
      });
    popup
      .querySelector("button[id=mextension-copy-text-button]")
      .addEventListener("mousedown", () => {
        input.select();
        navigator.clipboard.writeText(input.value).then(() => {
          messageBox.focus();
          toggleMainPopup();
          const alertPopup = document.createElement("div");
          alertPopup.classList.add("mextension-popup");
          alertPopup.textContent = "Copied to Clipboard!";
          popupAnchor.appendChild(alertPopup);
          setTimeout(() => alertPopup.remove(), 1000);
        });
      });
    popup
      .querySelector("button[id=mextension-button1]")
      .addEventListener("mousedown", () => {
        if (input.value) {
          processMessage(input.value.toString(), {}).then((responseMessage) => input.value = responseMessage);
        }
      });
  } else {
    setTimeout(() => addContent(), 500);
  }
}

function toggleMainPopup() {
  popup.style.setProperty(
    "visibility",
    popup.style.getPropertyValue("visibility") === "hidden"
      ? "visible"
      : "hidden"
  );
}

getElements();
addContent();
