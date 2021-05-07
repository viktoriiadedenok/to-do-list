import firebase from "./firebase";

const db = firebase.collection("tutorials");

export class ToDolDataService {
    getAll() {
        return db;
    }

    create(tutorial) {
        return db.add(tutorial);
    }

    update(id, value) {
        return db.doc(id).update(value);
    }

    delete(id) {
        return db.doc(id).delete();
    }
}
