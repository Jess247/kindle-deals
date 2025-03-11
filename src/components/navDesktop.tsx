import { Link } from "react-router"
function NavDesktop() {
    const navLinks = ["Home", "Deals", "Events", "My library"]
    return(
        <nav>
           {navLinks.map(link => <Link to={link}/>)} 
        </nav>
    )
}

export default NavDesktop