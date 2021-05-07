import React from 'react';
import ListForm from "./ListForm";
import ListsItems from "./ListsItems";

const ToDoList = () => {
    return (
        <div className="m-t-50">
            <span className="login100-form-title p-b-20">My check list</span>
            <ListForm />
            <ListsItems />
        </div>
    )
}

export default ToDoList;