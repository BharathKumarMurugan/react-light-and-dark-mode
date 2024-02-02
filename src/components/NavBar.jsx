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
            <div className="switch-mode">
                <label>
                    <input type="checkbox" onChange={toggleMode} value={mode} checked={mode === "dark"}/>
                    {/* <ion-icon name="cloudy-night-outline" className="moon"></ion-icon>
                    <ion-icon name="partly-sunny-outline" className="sun"></ion-icon> */}
                    <span className="slider slider-pin"></span>
                </label>
            </div>
        </nav>
    )
}