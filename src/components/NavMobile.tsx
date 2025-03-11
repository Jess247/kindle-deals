import { Link } from "react-router"
function NavMobile() {

    const navLinks: string[] = ["Home", "Deals", "Events", "My library"]

    return(
        <nav>
           {navLinks.map(link => <Link to={link}/>)} 
        </nav>
    )
}

export default NavMobile