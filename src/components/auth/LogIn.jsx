import React from 'react';
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div>
            <div className="limiter"></div>
            <div className="container-login100">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <form className="login100-form validate-form flex-sb flex-w">
                        <span className="login100-form-title p-b-51">
                            Login
					    </span>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Username is required">
                            <input className="input100" type="text" name="username" placeholder="Username" />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                            <input className="input100" type="password" name="pass" placeholder="Password" />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="flex-sb-m w-full p-t-3 p-b-24">
                            <div className="txt1">
                                <Link to="/registration">
                                    <strong>Registration</strong>
                                </Link>
                            </div>
                        </div>
                        <div className="container-login100-form-btn m-t-17">
                            <button className="login100-form-btn">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >)
}

export default LogIn;