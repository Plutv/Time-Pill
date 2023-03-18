import { useLocation } from "react-router-dom";

const Done = () => {
    const location = useLocation();
    const id = location.state.param;
    return (
        <>
            <div className="container">
                <h1 className="page-header">胶囊添加成功</h1>
                <div className="main">
                    <form>
                        <label>胶囊Key</label>
                        <input type="text" value={id} style={{width:220}} />
                            <span style={{padding:8}}>你可以复制 key自己保存，也可以发送给你的好友，让他来打开胶囊。</span>
                    </form>
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}

export default Done;