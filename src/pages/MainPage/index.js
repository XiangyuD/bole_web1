import React from "react";
import './styles.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="module">
                    <div className="module-container">模块 1</div>
                </div>
                <div className="module">登录模块</div>
                <div className="module">模块 3</div>
                <div className="module">模块 4</div>
                <div className="module">模块 5</div>
                <div className="module">模块 6</div>
                <div className="module">模块 7</div>
                <div className="SideMargin"></div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage;