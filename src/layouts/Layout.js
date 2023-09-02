import {NavLink, Outlet} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const Layout = () => {
    return (
        <div>
            <div className="navbar">
                <NavLink to="/" className="logo">Router Web</NavLink>
                <div className="menu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="users">Users</NavLink>
                    <NavLink to="help">Help</NavLink>
                </div>
            </div>



                <div className="bread">
                    <Breadcrumbs/>
                </div>
                <div className="outlet">
                    <Outlet />
                </div>
        </div>
    )
}

export default Layout;