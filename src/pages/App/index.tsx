import { useNavigate } from "react-router-dom";
import "./style.css"


const App = () => {
    const nav = useNavigate();
    const addPill = () => {
        console.log("tiaozhuan put");
        nav("/put");
    }
    const openPill = () => {
        nav("/open");
    }
    const aboutPill = () => {
        nav("/about");
    }
    return (
        <div className="home-main">
            <img className="logo-big" src="logo_big.png" alt=""></img>
            <h1 className="title">时间胶囊</h1>
            <div className="action">
                <div className="put" onClick={addPill}>
                    <span>Put</span>
                    {"添加"}
                </div>
                <div className="open" onClick={openPill}>
                    <span>Open</span>
                    {"打开"}
                </div>
            </div>
            <div className="home-footer">
                <div onClick={aboutPill}>什么是时间胶囊？</div>
                {" · "}
                <a href="http://www.timepill.net/"> 回胶囊日记</a>
            </div>
        </div>
    )
}

export default App;