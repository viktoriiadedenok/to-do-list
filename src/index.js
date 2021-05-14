import React from "react"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { render } from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { rootReducer } from "./redux/rootReducer"
import firebase from "firebase/app";
import 'firebase/firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import "./main.css";
import "./util.css";


var firebaseConfig = {
  apiKey: "AIzaSyApQDke81ww4c6xFM7fT9Se4NOrDFM937I",
  authDomain: "to-do-list-28ba7.firebaseapp.com",
  projectId: "to-do-list-28ba7",
  storageBucket: "to-do-list-28ba7.appspot.com",
  messagingSenderId: "363693681197",
  appId: "1:363693681197:web:10f308cdc69d76bd4e26a4",
  measurementId: "G-EPCH4F8LXN"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfConfig = {
  userProfile: "tutorials",
  useFirestoreForProfile: true
}
const initialState = {}
const store = createStore(rootReducer, initialState
  // compose(
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}


render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
