import {Link, useLoaderData} from "react-router-dom";

export default function Users() {

    const result = useLoaderData();

    return (
        <div className="flex flex-col space-y-11 w-[500px]">
            {
                result.users.map(user => (
                    <div className="users-main" key={user.id}>
                        <img alt={user.username} src={user.image}/>
                        <div className="flex flex-col m-12">
                            <Link to={user.id.toString()} className="font-semibold p-1 hover:text-white">{user.firstName} {user.lastName}</Link>
                            <p className="p-1">UserName: {user.username}</p>
                            <p className="p-1">Email: {user.email}</p>
                            <Link className="p-1 font-extrabold hover:text-blue-50" to={user.id.toString()}>More Details...</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export const usersLoader = async () => {
    const res = await fetch("https://dummyjson.com/users")

    if(!res.ok)
        throw new Error ("Could not fetch users ")

    return res.json()
}