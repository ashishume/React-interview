import ReactDOM from "react-dom";
import React from "react";
import Routing from "./Routing/Routing";
import { Provider } from "react-redux";
import { store } from "./e-commerce/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
