// import React from 'react';
// import './styles.css'
// import Logo from '../../resources/favicon.jpg'
import {Link} from "react-router-dom";


import React from "react";
import "./styles.css";
import Logo from '../../resources/favicon.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faBell} from "@fortawesome/free-solid-svg-icons";

function HeaderLogin() {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <a href="/" className="navbar-brand">
                        <img src={Logo} alt="LinkedIn"/>
                    </a>
                    <form className="search-form">
                        <FontAwesomeIcon icon={faSearch}/>
                        <input type="text" placeholder="搜索"/>
                    </form>
                    <ul className="nav-links">
                        <li className="nav-link">
                            <a href="/">首页</a>
                        </li>
                        <li className="nav-link">
                            <a href="/">我的网络</a>
                        </li>
                        <li className="nav-link">
                            <a href="/">职位</a>
                        </li>
                        <li className="nav-link">
                            <a href="/">消息</a>
                            <span className="badge">5</span>
                        </li>
                        <li className="nav-link">
                            <a href="/">我</a>
                            <FontAwesomeIcon icon={faBell}/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default HeaderLogin;
