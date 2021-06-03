import React from 'react';
import ItemForm from "./ItemForm";
import ListsItems from "./ListsItems";

const ToDoList = () => {
    return (
        <div className="m-t-50">
            <span className="login100-form-title p-b-20">My check list</span>
            <ItemForm />
            <ListsItems />
        </div>
    )
}

export default ToDoList;