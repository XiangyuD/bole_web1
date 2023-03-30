import React, {useState} from 'react';
import axios from 'axios';
import './styles.css';
import Logo from '../../resources/bole-black-logo.png'
import { Link } from "react-router-dom";

function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8082/api/login', {
                email: email,
                password: password,
                credentials: 'include'
            });
            setErrorMessage('');
            if(response.data === "Login successfully"){
                props.history.push(`/user-mainPage`);;
            }else{
                alert(response.data);
            }
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }

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
                <p>Sign in to BoLe</p>
            </div>
            {errorMessage && <div>{errorMessage}</div>}
            <div className="form">
                <div className="input_field">
                    <label htmlFor="email">Email</label>
                    <input
                        className="input"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="input_field">
                    <label htmlFor="password">Password</label>
                    <input
                        className="input"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Link to="/reset-password">
                        <a href="/reset-password" className="forgot">Forgot password?</a>
                    </Link>
                </div>
                <button className="sign_btn" type="submit" onClick={handleSubmit}>Sign in</button>
            </div>
            <div className="creatAccount-form">
                <div className="creatAccount-font">
                    New to BoLe?
                    <Link to="/sign-up">
                        <span className="creatAccount-font-create"> Creat an account</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;