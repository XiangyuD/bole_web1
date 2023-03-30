import React from "react";
import './styles.css';
import Logo from '../../resources/bole-black-logo.png'
import {Link} from "react-router-dom";

const ResetPassword = () => {
    return (
        <div className="wrapper">
            <div className="logo">
                <Link to="">
                <img
                    src={Logo}
                    alt="BoLe"/>
                </Link>
            </div>
            <div className="title">
                <p>Reset Password</p>
            </div>
            <div className="form">
                <div className="input_field">
                    <label>Username or email address</label>
                    <input type="text" className="input"/>
                </div>
                <div className="input_field">
                    <label>Password</label>
                    <input type="password" className="input"/>
                    {/*<Link>*/}
                    <a className="forgot">Forgot password?</a>
                    {/*</Link>*/}
                </div>
                <div className="btn">
                    <input type="submit" value="Sign in" className="sign_btn"/>
                </div>
            </div>

            <div className="creatAccount-form">
                <div className="creatAccount-font">
                    New to BoLe?
                    {/*<Link>*/}
                    <span className="creatAccount-font-create"> Creat an account</span>
                    {/*</Link>*/}
                    .
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;