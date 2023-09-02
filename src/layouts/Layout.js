import {NavLink, Outlet} from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

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

            <Breadcrumbs/>



            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;