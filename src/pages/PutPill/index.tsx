import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs"
import type from "../../type"
import { v4 as uuidv4 } from "uuid"
import "./style.css"


const list: type[] = [];

const Add = () => {
    const open_time = dayjs().valueOf();

    const nav = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [time, setTime] = useState(open_time);
    const [content, setContent] = useState("");
    const [tips, setTips] = useState("");
    const [input_time, setInputTime] = useState(dayjs(open_time).format('YYYY-MM-DD HH:mm:ss'));
    
    const [name_error, setNameError] = useState("");
    const [email_error, setEmailError] = useState("");
    const [time_error, setTimeError] = useState("");
    const [content_error, setContentError] = useState("");
    const [tips_error, setTipsError] = useState("");
    function addPill() { //添加一个时间胶囊，点击添加后进行判断和生成
        let flag = 1;
        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        //对输入的名字进行校验
        if (name === "") {
            flag = 0;
            setNameError("名字 必须填写.");
        }
        else if (name.length > 20) {
            flag = 0;
            setNameError("名字 不能超过20个字.");
        }
        else {
            setNameError("");
        }
        //对输入的电子邮箱进行校验
        if (email === "") {
            flag = 0;
            setEmailError("邮箱 必须填写.");
        }
        else if (!emailRegex.test(email)) {
            flag = 0;
            setEmailError("邮箱 必须是一个有效的电子邮箱地址.")
        }
        else {
            setEmailError("");
        }
        //对时间格式进行校验
        const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
        console.log(input_time)
        if (!regex.test(input_time)) {
            flag = 0;
            setTimeError("打开时间 格式不正确")
        }
        else {
            setTime(dayjs(input_time).valueOf());
            setTimeError("");
        }
        //对胶囊内容进行校验
        if (content === "") {
            flag = 0;
            setContentError("内容 必须填写");
        }
        else if (content.length > 5000) {
            flag = 0;
            setContentError("内容 不能超过5000字");
        }
        else {
            setContentError("");
        }
        //对提示信息进行校验
        if (tips.length > 200) {
            flag = 0;
            setTipsError("未到期提示信息 不能超过200字");
        }
        else {
            setTipsError("");
        }
        
        if (flag === 1) {
            const item = {
                id: shortUuid(),
                name: name,
                time: open_time,
                email: email,
                content: content,
                tips: tips
            }
            list.push(item);
            localStorage.setItem("pills", JSON.stringify(list));
            nav("put_done", { state: { param: item.id}});
        }
    }

    function shortUuid() {
        const uuid = uuidv4(); // 生成一个标准的 UUID
        const parts = uuid.split('-'); // 将 UUID 按连字符拆分成 5 部分
        return `${parts[0].substring(0, 4)}-${parts[1].substring(0, 4)}-${parts[2].substring(0, 4)}-${parts[3].substring(0, 4)}-${parts[4].substring(0, 4)}`;
    }

    return (
        <div className="container">
            <h1 className="page-header">添加胶囊</h1>
            <div className="main">
                <form method="post">
                    <label>你的名字</label>
                    {name_error && <div className="error">{name_error}</div>}
                    <input className="name" style={{ width: 220 }} value={name} onChange={event => setName(event.target.value)} name="name" type="text" />
                    <label>你的邮箱</label>
                    {email_error && <div className="error">{email_error}</div>}
                    <input className="email" style={{ width: 220 }} width={220} onChange={event => setEmail(event.target.value)} value={email} name="email" type="text" />
                    <label>打开时间</label>
                    {time_error && <div className="error">{time_error}</div>}
                    <input name="time" style={{ width: 220 }} width={220} onChange={event => setInputTime(event.target.value)} defaultValue={dayjs(time).format('YYYY-MM-DD HH:mm:ss')} type="text" />
                    <span className="tips">打开时间之前，胶囊内容是看不到的。</span>
                    <label>胶囊内容</label>
                    {content_error && <div className="error">{content_error}</div>}
                    <textarea name="content" value={content} onChange={event => setContent(event.target.value)} style={{ marginBottom: 0 }} rows={8} cols={50} ></textarea>
                    <span className="tips">胶囊内容不能超过5000字。</span>
                    {tips_error && <div className="error">{tips_error}</div>}
                    <label style={{ marginTop: 10 }}>未到期提示信息</label>
                    <textarea name="tips" value={tips} onChange={event => setTips(event.target.value)} style={{ marginBottom: 0 }} rows={3} cols={50}></textarea>
                    <span className="tips">在 打开时间 之前打开胶囊，会看到提示信息。</span>
                    <p style={{ marginTop: 20 }}>
                        <input style={{cursor:"pointer"}} onClick={addPill} type="button" value="添加胶囊" />
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Add;