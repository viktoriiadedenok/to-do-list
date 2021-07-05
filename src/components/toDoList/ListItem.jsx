import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from 'react-redux-firebase'


const ListItem = ({ isDone, title, id }) => {
    const [isTodoItemDone, setTodoItemDone] = useState(isDone);
    const firestore = useFirestore();
    const { uid } = useSelector(state => state.firebase.auth);

    useFirestoreConnect({
        collection: `users2-${uid}`,
    })

    const handleChange = (event) => {
        if (event.currentTarget.type === "checkbox") {
            setTodoItemDone(!isTodoItemDone);
            firestore.update(`users2-${uid}/${id}`, { isDone: !isTodoItemDone })
        }
    };

    return (
        <div className="post text-muted">
            <strong>
                <div style={{
                    textDecoration: isTodoItemDone && "line-through",
                    opacity: isTodoItemDone ? 0.5 : 1,
                }}>
                    <input
                        className="m-2"
                        type="checkbox"
                        name=""
                        id=""
                        onChange={handleChange}
                        checked={isTodoItemDone}
                    />
                    {title}
                </div>
            </strong>
        </div>
    );
};


export default ListItem;
