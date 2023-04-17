let mextensionUrl = "http://localhost:8080/messages";
let mextensionApiConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
};

async function processMessage(message, options) {
  return fetch(mextensionUrl, {
    ...mextensionApiConfig,
    body: JSON.stringify({ body: message, user_name: "test user" })
  }).then((response) => {
    return response.json();
  }).then(body => {
    return JSON.stringify(body);
  }).catch((e) => {
    console.warn(e);
    return "could not establish a connection";
  });
}