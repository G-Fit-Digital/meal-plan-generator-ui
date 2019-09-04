import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AddItem from "./routes/AddItem/AddItem";
import * as serviceWorker from "./serviceWorker";
import { StoreContext } from "redux-react-hook";
import configureStore from "./store/store";
import App from "./App";
import("./ReactoTronConfig").then(() => console.log("Reactotron Configured"));

const store = configureStore();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    {/* <AddItem /> */}
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
