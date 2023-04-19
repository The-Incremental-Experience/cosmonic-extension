async function processMessage(message, options) {
  const mextensionUrl = "https://red-glade-2122.cosmonic.app/messages";
  const mextensionApiConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  };

  return fetch(mextensionUrl, {
    ...mextensionApiConfig,
    body: JSON.stringify({
      body: { body: message, user_name: "test user" },
      method: options["method"],
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response["result"];
    })
    .catch((e) => {
      console.warn(e);
      return "could not establish a connection";
    });
}
