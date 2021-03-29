import React from 'react';
import PostForm from "./PostForm";
import Posts from "./Posts";

const ToDoList = () => {
    return (
        <div className="m-t-100">
            <span className="login100-form-title p-b-51">My check list</span>
            <PostForm />
            <Posts />
        </div>
    )
}

export default ToDoList;