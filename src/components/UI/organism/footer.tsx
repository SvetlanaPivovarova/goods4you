import logo from "../../../assets/logo.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <img src={logo} className="logo" alt="logo of store Goods4you" />
                <nav>
                    <ul className="menu menu_type_primary">
                        <li className="menu__link">
                            <a className="menu__link-item" href={"#catalog"}>
                                Catalog
                            </a>
                        </li>
                        <li className="menu__link">
                            <a className="menu__link-item" href={"#about-us"}>
                                About us
                            </a>
                        </li>
                        <li className="menu__link">
                            <a className="menu__link-item" href={"#product-selection"}>
                                Product selection
                            </a>
                        </li>
                        <li className="menu__link">
                            <a className="menu__link-item" href={"#our-team"}>
                                Our team
                            </a>
                        </li>
                        <li className="menu__link">
                            <a className="menu__link-item" href={"#faq"}>
                                FAQ
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer