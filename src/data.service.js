// import firebase from "./firebase";

// const db = firebase.collection("tutorials");

// export class ToDolDataService {
//     getAll() {
//         return db;
//     }

//     create(tutorial) {
//         return db.add(tutorial);
//     }

//     update(id, value) {
//         return db.doc(id).update(value);
//     }

//     delete(id) {
//         return db.doc(id).delete();
//     }
// }

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