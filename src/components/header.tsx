import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";

type HeaderProps = {
    type: string
}

function Header(props: HeaderProps) {
    const {type} = props
    const headerClass = (type == "primary") ? "header header_type_primary" : "header header_type_secondary"

    return (
        <header className={headerClass}>
            <div className="container header__container">
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
                        <li className="menu__link">
                            <Link className="menu__link-item" to={"/admin"}>
                                For staff
                            </Link>
                        </li>
                    </ul>
                    <ul className="menu menu_type_secondary">
                        <li className="menu__link">
                            <Link className="menu__link-item" to="/">Back to site</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
