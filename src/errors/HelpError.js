import {Link, useRouteError} from "react-router-dom";

const HelpError = () => {
    const error = useRouteError();

    return (
        <div className="user-error">
            <h1>
                Error
            </h1>
            <p>{error.message}</p>
            <Link to="/">Back to Homepage</Link>
        </div>
    )
}

export default HelpError;