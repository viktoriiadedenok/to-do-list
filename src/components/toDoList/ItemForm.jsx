import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'

const ItemForm = () => {
  const [presentToDo, setPresentToDo] = useState("");
  const { uid } = useSelector((state) => state.firebase.auth);

  const firestore = useFirestore();

  const submitHandler = event => {
    event.preventDefault()
    if (presentToDo) { // check here
      firestore
        .collection(`users2-${uid}`)
        .add({
          title: presentToDo,
          isDone: false,
        })
    }
    event.target.reset();
    setPresentToDo("") // and here
  }

  const setItem = event => {
    setPresentToDo(event.target.value);
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
              title={presentToDo}
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
