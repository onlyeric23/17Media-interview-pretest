import * as React from "react";
import { render } from "react-dom";

import App from "./App";

// Prevent using vh
// Ref: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
const setCustomViewHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};
setCustomViewHeight();
window.addEventListener("resize", () => {
  setCustomViewHeight();
});

const rootElement = document.getElementById("root");
render(<App />, rootElement);
