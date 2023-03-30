import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";
import Logo from '../../resources/favicon.png'

function AboutUs() {
    return (
        <header className="header">
            <div className="container">
                <nav className="navigation">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="Logo"/>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default AboutUs;
