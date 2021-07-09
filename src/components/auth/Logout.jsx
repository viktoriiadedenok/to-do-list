import React from "react"
import { useSelector } from 'react-redux'
import { useFirebase } from "react-redux-firebase";

const Logout = () => {
    const firebase = useFirebase();

    const logout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    const { uid } = useSelector((state) => state.firebase.auth);

    return (
        <div><button className=" btn btn-link" onClick={logout}>Log out</button></div >
    )
}

export default Logout;