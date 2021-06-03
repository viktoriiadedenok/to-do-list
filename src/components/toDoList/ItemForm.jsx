import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'

const ItemForm = () => {
  const [presentToDo, setPresentToDo] = useState({ title: "" });
  const { uid } = useSelector((state) => state.firebase.auth);
  const firestore = useFirestore();

  const todos = useSelector(state => {
    return state.firestore.ordered["tutorials"]
  });

  useFirestoreConnect([
    'tutorials'
  ])

  const submitHandler = event => {
    event.preventDefault()
    if (presentToDo.title) { // check here
      firestore.add(`tutorials`, presentToDo)
    }
    event.target.reset();
    setPresentToDo({ title: '' }) // and here
  }

  const setItem = event => {
    setPresentToDo({ title: event.target.value });
  }

  if (!isLoaded(todos)) {
    return 'Loading'
  }

  return (
    <div >
      <form
        className="d-flex justify-content-between m-b-15"
        onSubmit={submitHandler}>
        <div className="input-form">
          <div className="wrap-input100 validate-input "
          >
            <input
              placeholder="Write down something"
              className="input100"
              type="text"
              id="title"
              title={presentToDo.title}
              name="title"
              onChange={setItem}
            />
          </div>
          <div className="">
            <button type="submit"
              className="login100-form-btn"
            ><li className="fas fa-plus-square"></li></button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default ItemForm;
