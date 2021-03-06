import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";


const AddTodo = () => {

    const [presentToDo, setPresentToDo] = useState("");
    const firestore = useFirestore();
    const { uid } = useSelector((state) => state.firebase.auth);

    const handleChange = ({ currentTarget: { name, value } }) => {
        if (name === "addTodo") {
            setPresentToDo(value);
        }
    };

    const addNewTodo = (todo) => {
        firestore
            .collection(`users-${uid}`)
            .add({
                title: todo,
                isDone: false,
            })
            .then((docRef) => {
                docRef.update({
                    todoID: docRef.id,
                });
            });
        setPresentToDo("");
    };

    return (
        <div>
            <form style={{ border: "blue" }} action="">
                <input
                    type="text"
                    name="addTodo"
                    value={presentToDo}
                    onChange={handleChange}
                />
                <button
                    onClick={(event) => {
                        event.preventDefault();
                        addNewTodo(presentToDo);
                    }}
                >
                    Add Todo
        </button>
            </form>
        </div>
    );
};
export default AddTodo;