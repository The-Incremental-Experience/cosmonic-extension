let mextensionUrl = "http://localhost:8080/messages";
let mextensionApiConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
};

async function processMessage(message, options) {
  try {
    return await fetch(mextensionUrl, { ...mextensionApiConfig, body: message });
  } catch (e) {
    console.warn(e);
    return "could not establish a connection";
  }
}