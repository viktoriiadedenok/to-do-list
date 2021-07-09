import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const firebase = useFirebase();
    const history = useHistory();

    const { uid } = useSelector((state) => state.firebase.auth);

    const getEmail = (event) => {
        event.preventDefault();
        setEmail(event.target.value)
    }

    const getPass = (event) => {
        event.preventDefault();
        setPassword(event.target.value)
    }

    const sighInWithEmailAndPassword = (ev) => {
        ev.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                history.push("/to_do_list");
                // Signed in
                var user = userCredential.user;
                // ...
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
            });

    }

    const signInWithGoogle = () => {
        firebase
            .login({
                provider: "google",
                type: "popup",
            })
            .then(() => {
                // history.push("/todos");
                history.push("/to_do_list");
            });
    };

    return (
        <div>
            <span> {uid} is signed in</span><br></br>
            <div className="limiter"></div>
            <div className="container-login100">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <form className="login100-form validate-form flex-sb flex-w" onSubmit={sighInWithEmailAndPassword}>
                        <span className="login100-form-title p-b-51">
                            Login
					    </span>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Username is required">
                            <input className="input100" type="email"
                                name="email"
                                placeholder="E-mail"
                                title={email}
                                onChange={getEmail} />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                            <input className="input100" type="password"
                                name="pass"
                                placeholder="Password"
                                title={password}
                                onChange={getPass} />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="flex-sb-m w-full p-t-3 p-b-24">
                            <div className="txt1">
                                <Link to="/registration">
                                    <strong>Registration</strong>
                                </Link><br />
                                {/* <Link > */}
                                <button className="btn-link" onClick={signInWithGoogle}> Sign In with Google <i className="fab fa-google ml-1"></i></button>
                                {/* </Link> */}
                            </div>
                        </div>

                        <div className="container-login100-form-btn m-t-17">
                            <button type="submit" className="login100-form-btn">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >)
}

export default LogIn;