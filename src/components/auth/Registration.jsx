import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";

const Registration = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const firebase = useFirebase();
    const history = useHistory();
    // const { uid } = useSelector((state) => state.firebase.auth);

    const createUserName = (event) => {
        event.preventDefault();
        setUserName(event.target.value)
    }

    const createEmail = (event) => {
        event.preventDefault();
        setEmail(event.target.value)
    }

    const createPass = (event) => {
        event.preventDefault();
        setPassword(event.target.value)
    }

    const createNewUser = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            history.push("/to_do_list");
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <div className="limiter"></div>
            <div className="container-login100">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <form className="login100-form validate-form flex-sb flex-w">
                        <span className="login100-form-title p-b-51">
                            Registration
					   </span>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                            <input className="input100"
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                title={email}
                                onChange={createEmail} />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                            <input className="input100"
                                type="password"
                                name="pass"
                                placeholder="Password"
                                title={password}
                                onChange={createPass} />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Username is required">
                            <input className="input100"
                                type="text"
                                name="username"
                                placeholder="Username"
                                title={userName}
                                onChange={createUserName} />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="flex-sb-m w-full p-t-3 p-b-24">
                            <div className="txt1">
                                <Link className="btn-link" to="/log_in" >
                                    <strong>Already registrated</strong>
                                </Link>
                            </div>
                        </div>
                        <div className="container-login100-form-btn m-t-17">
                            <button className="login100-form-btn" onClick={(event) => {
                                event.preventDefault();
                                createNewUser(email, password)
                            }}>
                                Register
						</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Registration;