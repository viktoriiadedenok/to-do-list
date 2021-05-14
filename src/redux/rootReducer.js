import { combineReducers } from "redux"
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { itemReducer } from "./itemReducer";


export const rootReducer = combineReducers({
  item: itemReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
