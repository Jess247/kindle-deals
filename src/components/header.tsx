import NavDesktop from "./navDesktop"
import NavMobile from "./NavMobile"

const Header: React.FC = () => {
    const isMobile: boolean = false

    return (
        <header>
            {isMobile ? <NavMobile/> : <NavDesktop />}
        </header>
    );
};

export default Header;
