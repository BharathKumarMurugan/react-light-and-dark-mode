import { Link } from "react-router-dom"
import "./navbar.css";
export default function NavBar() {
    return (
        <nav className="navbar">
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
            </div>
        </nav>
    )
}