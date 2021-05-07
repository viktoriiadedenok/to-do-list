import React from "react"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { render } from "react-dom"
import { compose, createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { rootReducer } from "./redux/rootReducer"
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import "./main.css";
import "./util.css";

const store = createStore(rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
