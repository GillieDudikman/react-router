import {Outlet} from "react-router-dom";

const UsersLayout = () => {
    return (
        <div>
            <h1>Users</h1>

            <div className="outlet-user">
                <Outlet/>
            </div>
        </div>
    )
}

export default UsersLayout;