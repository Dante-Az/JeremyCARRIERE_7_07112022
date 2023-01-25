import {Link, useLocation} from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const {pathname} = useLocation();
    console.log(pathname)
    return(

        <nav>
            <ul className="navList">
                <li className="navItems">
                    <Link to="/" className={pathname === "/" ? "navLinkActive" : "navLink"}>Accueil</Link>
                </li>
                <li className="navItems navItemsPadding">
                    <Link to="/About" className={pathname === "/About" ? "navLinkActive" : "navLink"}>A propos</Link>
                </li>
            </ul>    
        </nav>
    )
}
