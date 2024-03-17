import logo from "../assets/logo.svg";

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} className="logo" alt="logo of store Goods4you" />
            <nav>
                <ul className="menu">
                    <li className="menu__link">Catalog</li>
                    <li className="menu__link">About us</li>
                    <li className="menu__link">Product selection</li>
                    <li className="menu__link">Our team</li>
                    <li className="menu__link">FAQ</li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer