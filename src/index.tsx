import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

if (container) {
  const root = ReactDOMClient.createRoot(container);

  root.render(<App name="John" />);
} else {
  throw new Error("No root element found");
}
