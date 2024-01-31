import {Link} from 'react-router-dom';
export default function ErrorPage () {
    return (
        <div className="page">
            <h2>404</h2>
            <p>Page not found</p>
            <div>
                Go back to <Link to="/">Home</Link>
            </div>
        </div>
    )
}