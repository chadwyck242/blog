import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// importing these functions from the Redux package
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

// this variable is passed as a prop below
//  setup for the Redux store, with reducers and middleware(thunk)
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
