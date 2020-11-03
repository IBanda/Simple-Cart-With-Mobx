import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import store from "./store";
export const MobxStore = createContext();
ReactDOM.render(
  <MobxStore.Provider value={store}>
    <App />
  </MobxStore.Provider>,
  document.getElementById("root")
);
