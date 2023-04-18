async function processMessage(message, options) {
  const mextensionUrl = "http://localhost:8080/messages";
  const mextensionApiConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(mextensionUrl, {
    ...mextensionApiConfig,
    body: JSON.stringify({ body: { body: message, user_name: "test user" }, method: options["method"] })
  }).then((response) => {
    return response.json();
  }).then(body => {
    return JSON.stringify(body["message"]);
  }).catch((e) => {
    console.warn(e);
    return "could not establish a connection";
  });
}