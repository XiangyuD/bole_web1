import React from 'react';
import './styles.css'
import Logo from '../../resources/bole-black-logo.png'

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="left-column">
                    <img
                        src={Logo}
                        alt="Logo"
                    />
                    <span>BoLe Network LLC © 2023</span>
                </div>
                <div className="right-column">
                    <a href="/about">About</a>
                    <a href="#">User Agreement</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                    <a href="#">Copyright Policy</a>
                    <a href="#">Brand Policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
