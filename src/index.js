import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <script
      type="text/javascript"
      src="//imasdk.googleapis.com/js/sdkloader/ima3.js"
    ></script>
    <App />
  </>
);
