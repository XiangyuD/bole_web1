import React, {useState} from "react";
import './styles.css';
import Logo from '../../resources/bole-black-logo.png'
import axios from 'axios';
import {Link} from "react-router-dom";

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8082/api/sign-up', {
                username,
                email,
                password,
                credentials: 'include'
            });
            setErrorMessage('');
            alert(response.data);
        } catch (error) {
            console.error(error);
            setErrorMessage('Registration failed');
        }
    };

    return (
        <div className="wrapper">
            <div className="logo">
                <Link to="/">
                    <img
                        src={Logo}
                        alt="BoLe"/>
                </Link>
            </div>
            <div className="title">
                <p>Sign up to BoLe</p>
            </div>
            <div className="form">
                <div className="input_field">
                    <label>Username</label>
                    <input type="text" className="input" value={username}
                           onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className="input_field">
                    <label>Email</label>
                    <input type="text" className="input" value={email}
                           onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="input_field">
                    <label>Password</label>
                    <input type="password" className="input" value={password}
                           onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div className="input_field">
                    <label>Confirm Password:</label>
                    <input type="password" className="input" value={confirmPassword}
                           onChange={(event) => setConfirmPassword(event.target.value)}/>
                </div>
                {errorMessage && <div className="errMsg">{errorMessage}</div>}
                <div className="btn">
                    <button type="submit" className="sign_btn" onClick={handleSubmit}>Register</button>
                </div>
            </div>

            <div className="creatAccount-form">
                <div className="creatAccount-font">
                    Already on BoLe?
                    <Link to="sign-in">
                        <span className="creatAccount-font-create"> Sign in</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
