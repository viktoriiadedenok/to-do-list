import React from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from 'react-redux-firebase'


const ListItem = ({ isDone, title, id }) => {
    const firestore = useFirestore();
    const { uid } = useSelector(state => state.firebase.auth);

    useFirestoreConnect({
        collection: `users2-${uid}`,
    })

    // useEffect(() => {
    //     setTodoItemDone(isDone);
    // }, [isDone])

    const handleChange = (event) => {
        if (event.currentTarget.type === "checkbox") {
            updateIsDone()
        }
    };

    const updateIsDone = () => {
        firestore.update(`users2-${uid}/${id}`, { isDone: !isDone })
    }

    return (
        <div className="post text-muted">
            <strong>
                <div style={{
                    textDecoration: isDone && "line-through",
                    opacity: isDone ? 0.5 : 1,
                }}>
                    <input
                        className="m-2"
                        type="checkbox"
                        name=""
                        id=""
                        onChange={handleChange}
                        checked={isDone}
                    />
                    {title}
                </div>
            </strong>
        </div>
    );
};


export default ListItem;
