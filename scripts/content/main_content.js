function addButton() {
  getElements();
  if (messageWrapper && messageBox) {
    // add main content
    messageWrapper.innerHTML += `
      <div class="mextension-popup">
        mextension-popup
        <input/>
        <div class="mextension-button-container">
          <button class="mextension-button">button1</button>
          <button class="mextension-button">button2</button>
        </div>
      </div>`;

    // add anchor which is not an anchor, but a toggle button
    messageWrapper.innerHTML += `<button class=mextension-popup-anchor>mextension-popup-anchor</button>`;

    // add event listener
    const popup = messageWrapper.querySelector("div[class=mextension-popup]");
    const popupAnchor = messageWrapper.querySelector(
      "button[class=mextension-popup-anchor]"
    );
    popupAnchor.addEventListener("mousedown", (event) => {
      popup.style.setProperty(
        "visibility",
        popup.style.getPropertyValue("visibility") === "hidden"
          ? "visible"
          : "hidden"
      );
    });
  } else {
    setTimeout(() => addButton(), 500);
  }
}

getElements();
addButton();
