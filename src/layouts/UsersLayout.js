import {Outlet} from "react-router-dom";

const UsersLayout = () => {
    return (
        <div>
            <h1>Users</h1>

            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default UsersLayout;