import React from "react";
import './styles.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <div>helllll</div>
            <div className="container">
                <div className="module">
                    <div className="module-container">模块 1</div>
                </div>
                <div className="module">用户登录后的主页！</div>
                <div className="module">模块 3</div>
                <div className="module">模块 4</div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage;