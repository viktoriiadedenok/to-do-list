import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'

const Popup = props => {

    const [updatedItem, setUpdatedItem] = useState({})
    const { uid } = useSelector((state) => state.firebase.auth);
    let changedItemTitle = props.item.title;
    const id = props.item.id;
    const firestore = useFirestore();


    useFirestoreConnect({
        collection: `users2-${uid}`,
    })

    const todos = useSelector(state => {
        return state.firestore.ordered[`users2-${uid}`]
    });

    const submitHandler = event => {
        event.preventDefault()
        updateItem(id, updatedItem);
        props.handleClose();
    }

    const updateItem = (id, updatedItem) => {
        firestore.update(`users2-${uid}/${id}`, updatedItem)
    }

    const changeInput = (event) => {
        changedItemTitle = event.target.value;
        setUpdatedItem({ title: changedItemTitle })
    }

    if (!isLoaded(todos)) {
        return 'Loading'
    }

    return (
        <div className="popup-box">
            <div className="box">
                <form
                    className="d-flex justify-content-between m-b-15"
                    onSubmit={submitHandler}
                >
                    <div className="input-form">
                        <div className="wrap-input100 validate-input "
                        >
                            <input
                                defaultValue={changedItemTitle}
                                className="input100"
                                type="text"
                                id="title"
                                name="title"
                                onChange={changeInput}
                            />
                        </div>
                        <div className="">
                            <button type="submit"
                                className="login100-form-btn"
                            ><li className="fa fa-check" aria-hidden="true"></li></button>
                        </div>
                    </div>
                </form>
                <span className="close-icon" onClick={props.handleClose}>x</span>
            </div>
        </div>
    );

};

export default Popup;