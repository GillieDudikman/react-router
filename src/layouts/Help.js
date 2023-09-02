import {NavLink, Outlet} from "react-router-dom";

const Help = () => {
    return (
        <div>
            <h1>Router Web Help</h1>
            <p>lorem ipsum</p>

            <div className="help">
                <NavLink to="faq">View FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </div>

            <main>
                    <Outlet />
            </main>
        </div>
    )
}

export default Help