import {Link, useLoaderData} from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();

    return (
        <div className="user-page">
            <img alt={user.username} src={user.image}/>
            <div className="details">
                <h1>{user.firstName} {user.lastName}</h1>
                <p>Username: {user.username}</p>
                <p>Age: {user.age}</p>
                <Link onClick={() => window.location = `mailto:${user.email}`}>Email: {user.email}</Link>
                <p>Address: {user.address.address}, {user.address.city}, {user.address.state}</p>
                <p>Job: {user.company.name}, {user.company.department} - {user.company.title}</p>
            </div>
        </div>
    )
}

export const detailsLoader = async ({ params }) => {
    const { id } = params;

    const result = await fetch("https://dummyjson.com/users/" + id)

    if(!result.ok)
        throw new Error("Could not find user")

    return result.json();
}

export default UserDetails;