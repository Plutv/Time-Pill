import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"

const Nav = (props: { param: string; }) => {
    const [active, setActive] = useState(props.param);
    const nav = useNavigate();
    const goBack = () => {
        nav("/");
    }
    const addPill = () => {
        setActive("put");
        nav("/put");
    }
    const openPill = () => {
        setActive("open");
        nav("/open");
    }
    return <>
        <div className="header">
            <div className="container">
                <a className="logo" href="/">时间胶囊</a>
                <ul className="nav">
                    <li className={active === 'home' ? 'active' : ''}><div onClick={goBack}>首页</div></li>
                    <li className={active === 'put' ? 'active' : ''}><div onClick={addPill}>添加</div></li>
                    <li className={active === 'open' ? 'active' : ''}><div  onClick={openPill}>打开</div></li>
                </ul>
                <ul className="nav nav-user">
                    <li><a href="http://www.timepill.net/">回胶囊日记</a></li>
                </ul>
            </div>
        </div>
    </>
}

export default Nav;

