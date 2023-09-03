import {Link} from "react-router-dom";

const NoPage = () => {
    return (
        <div>
            <h1>Page Not Found!</h1>
            <Link className="hover:text-white" to="/react-router">Go Back to Home By Click This</Link>

        </div>
    )
}

export default NoPage;