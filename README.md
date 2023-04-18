# Installation:

1. the extension does not fully work due issues with CORS, for it to work google-chrome must be started with
   web-security disabled:
   
   ### Linux
   ```bash
   open chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
   ```
   
   ### Windows
   ```powershell
   .\chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
   ```

2. follow the 3 steps to load an unpacked google-chrome extension
   [here](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked)