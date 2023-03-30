import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";
import Logo from '../../resources/favicon.png'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="navigation">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="Logo"/>
                        </Link>
                    </div>
                    <div className="rightColumn">
                        <Link to="/" className="navigation-item">
                            Home
                        </Link>
                        <Link to="/discover" className="navigation-item">
                            Discover
                        </Link>
                        <Link to="/jobs" className="navigation-item">
                            Jobs
                        </Link>
                        <div className="dash"></div>
                        <button className="buttonSignIn">
                            <Link to="/sign-in" className="navigation-item">
                                Sign In
                            </Link>
                        </button>
                        <button className="buttonSignUp">
                            <Link to="/sign-up" className="navigation-item">
                                Sign Up
                            </Link>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
