import React from 'react';
import ItemForm from "./ItemForm";
import ListsItems from "./ListsItems";
import { useSelector } from "react-redux";

const ToDoList = () => {
    const { displayName } = useSelector(state => state.firebase.auth);

    return (
        <div className="m-t-50">
            <div className="post text-muted ">Hello {displayName}</div>
            <span className="login100-form-title p-b-20">My to do list</span>
            <ItemForm />
            <ListsItems />
        </div>
    )
}

export default ToDoList;