import logo from "../assets/logo.svg"

function Header() {
    return (
        <>
        <header className="header">
            <div className="header__container">
                <img src={logo} className="logo" alt="logo of store Goods4you" />
                <nav>
                    <ul className="menu">
                        <li className="menu__link">Catalog</li>
                        <li className="menu__link">About us</li>
                        <li className="menu__link">Product selection</li>
                        <li className="menu__link">Our team</li>
                        <li className="menu__link">FAQ</li>
                        <li className="menu__link">For staff</li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Header
