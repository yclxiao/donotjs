import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore,combineReducers } from "redux";
import App from "./page";
import PageReducer from "./page/reducer";

console.log(PageReducer.textId)
const reducers = combineReducers({PageReducer});

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
