import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import { StoreProvider } from "./store"

if (process.env.NODE_ENV !== "production") {
  var axe = require("react-axe")
  axe(React, ReactDOM, 2000)
}

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
)
