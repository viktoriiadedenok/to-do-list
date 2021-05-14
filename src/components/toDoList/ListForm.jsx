import { React, useState } from "react";
import { connect } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { createItem, deleteItem, updateItem } from "../../redux/actions";
// import { ToDolDataService } from '../../data.service'
// const tds = new ToDolDataService();

const ListForm = (props) => {
  const [presentToDo, setPresentToDo] = useState({ title: " " });
  const firestore = useFirestore();
  // tds.getAll().onSnapshot(function (snapshot) {
  //   snapshot.docChanges().forEach(function (change) {
  //     const newItem = {
  //       title: change.doc.data().title,
  //       id: change.doc.id
  //     }
  //     if (change.type === "added") {
  //       props.createItem(newItem); //dispatch
  //       console.log("New item: ", change.doc.data());
  //     }
  //     if (change.type === "modified") {
  //       props.updateItem({ title: change.doc.data().title, id: change.doc.id });
  //     }
  //     if (change.type === "removed") {
  //       console.log("Removed item: ", change.doc.id);
  //       props.deleteItem({ id: change.doc.id }); //dispatch
  //     }
  //   });
  // });


  const submitHandler = event => {
    event.preventDefault()
    firestore.collection("tutorials").add(presentToDo)
    event.target.reset();
  }

  const setItem = event => {
    setPresentToDo({ title: event.target.value });
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

const mapDispatchToProps = {
  createItem,
  deleteItem,
  updateItem
}

export default connect(null, mapDispatchToProps)(ListForm);
