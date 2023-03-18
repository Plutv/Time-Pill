import "./style.css"
import Nav from "../../components/Nav"
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";


const Open = () => {
    const nav = useNavigate();
    const [key, setKey] = useState("");
    const [notfind, setFind] = useState("");
    function openPill() {
        if(key === ""){
            return;
        }
        else{
            const list = JSON.parse(localStorage.getItem("pills") || "");
            const element = list.find((item: { id: string; }) => item.id === key);
            if(element === undefined){
                setFind("true");
            }
            else{
                setFind("");
                nav("open_done", { state: { param: element}});
            }
        }
    }
    return (
        <>
            <Nav param={"open"} />
            <div className="container">
                <h1 className="page-header">打开胶囊</h1>
                <div className="main">
                    <form method="post" style={{marginBottom: 30}}>
                        <label>{"胶囊Key："}
                            <input className="key" name="key" value={key} onChange={event => setKey(event.target.value)} style={{width:220}} type="text" />
                            <input onClick={openPill} type="button" style={{padding:7, cursor: "pointer"}} value="打开胶囊" />
                        </label>
                    </form>
                    {notfind && <div className="tips tips-highlight" style={{padding: 8, width: 400, color: "#900"}}>没有这个胶囊Key</div>}
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export default Open;