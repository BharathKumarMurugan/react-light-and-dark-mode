import { Link } from "react-router-dom"
import { useMode } from "../modeContext";
export default function NavBar() {
    const { mode, toggleMode } = useMode();
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