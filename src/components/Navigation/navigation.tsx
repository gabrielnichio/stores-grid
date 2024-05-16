import "./navigation.css";
import logo from "../Images/cabecalho.png"

export const NavigationBar = () => {
    return (
        <div>
            <nav className="navigation-bar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Produtcs</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}