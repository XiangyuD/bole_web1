import React from "react";
import "./styles.css";

function BottomModule() {
    return (
        <div className="footer">
                <div className="footer-section">
                    <h4>关于 LinkedIn</h4>
                    <ul>
                        <li>LinkedIn 简介</li>
                        <li>品牌工具</li>
                        <li>新闻中心</li>
                        <li>LinkedIn 隐私政策</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>商业解决方案</h4>
                    <ul>
                        <li>人才解决方案</li>
                        <li>营销解决方案</li>
                        <li>销售解决方案</li>
                        <li>学习解决方案</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>加入 LinkedIn</h4>
                    <ul>
                        <li>工作机会</li>
                        <li>实习机会</li>
                        <li>社交媒体</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>社区指南</h4>
                    <ul>
                        <li>社区行为准则</li>
                        <li>用户协议</li>
                        <li>知识产权政策</li>
                    </ul>
                </div>
        </div>
    );
}

export default BottomModule;