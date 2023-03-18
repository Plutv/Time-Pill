import "./style.css"
import { useLocation } from "react-router-dom";
import type from "../../type"

const Open = () => {
    const location = useLocation();
    const params: type = location.state?.param;
    if (!params) {
        return <></>;
    }
    return (
        <div className="pill">
            <h2>{params.name} 在 {params.time} 对你说：</h2>
            <br/>
            <div className="content">
                <pre style={{lineHeight:"1.8em", whiteSpace:"pre-wrap"}}>{params.content}</pre>
            </div>
        </div>
    )
}

export default Open;