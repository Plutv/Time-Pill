import "./style.css"
import Nav from "../../components/Nav"
import { Outlet } from "react-router-dom"

const Put = () => {
    return (
        <>
            <Nav param={"put"}/>
            <Outlet></Outlet>
        </>
    )
}

export default Put;