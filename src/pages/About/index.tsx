import "./style.css"
import Nav from "../../components/Nav"

const About = () => {
    return (
        <>
            <Nav param={"open"} />
            <div className="container">
                <h1 className="page-header">打开胶囊</h1>
                <div className="main">
                    <form method="post" style={{ marginBottom: 30 }}>
                        <label>{"胶囊Key："}
                            <input className="key" name="key" value="763c-ecdb-fea9-f85e-76cb" style={{ width: 220 }} type="text" />
                            <input type="button" style={{ padding: 7, cursor: "pointer" }} value="打开胶囊" />
                        </label>
                    </form>
                    <div className="pill">
                        <h2>时间管理员 在 2009-09-22 19:56:16 对你说：</h2>
                        <br />
                        <div className="content">
                            <pre>
                                <h1>帮助</h1>
                                <p>欢迎你访问“时间胶囊”</p>
                                <p>
                                    <span color="#ee1111">
                                        <span className="q">1、什么是“时间胶囊”。</span>
                                        <br />
                                    </span>
                                    “时间胶囊”是一个给未来的留言板，你可以为自己，朋友，爱人，家人，或者任何人留下你现在想对他们说的话，并且设置一个未来能够打开“时间胶囊”的时间，这样他们就能在未来的某天通过网站给你的密码来这里打开“时间胶囊”,读到你的留言。
                                </p>
                                <p>“时间胶囊”
                                    <br />
                                    可以是一个预言
                                    <br />
                                    可以是一篇日记
                                    <br />
                                    可以是一句牢骚
                                    <br />
                                    可能只是一句“我爱你”
                                    <br />请发挥你的想象力使用它吧。
                                </p>
                                <p>
                                    <span color="#ee1111">
                                        <span className="q">2、你已经有了一个“密码（KEY）”了么？</span>
                                        <br />
                                    </span>
                                    如果你已经得到朋友给你的KEY,请点击主页上“OPEN 提取”，输入你得到的KEY,然后在某个时间打开朋友留给你的时间胶囊。
                                </p>
                                <p>
                                    <span color="#ee1111">
                                        <span className="q">3、你想留下一个“时间胶囊”？</span>
                                        <br />
                                    </span>
                                    如果你想留下一个“时间胶囊”，请点击主页上的“PUT 添加”，并且按照提示填写你的信息，之后你就能获得一个“密码 KEY”了，将这个“密码 KEY”和我们的网址发给你的朋友，朋友就能在未来你限定的时间之后提取胶囊了。
                                </p>
                                <p>
                                    <span color="#ee1111">
                                        <span className="q">4、你想删除一个“时间胶囊”？</span>
                                        <br />
                                    </span>对不起，任何添加的“时间胶囊”都是不可撤销的。
                                </p>
                                <p>
                                    <span color="#ee1111">
                                        <span className="q">5、你担心隐私安全？</span>
                                        <br />
                                    </span>请放心，我们能确保您的信息保密，任何隐私不会受到威胁。</p>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default About;