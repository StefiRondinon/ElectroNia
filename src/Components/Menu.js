import { Link } from "react-router-dom"
import bootstrap from 'bootstrap';


function Menu() {
    return (
        <div className="container">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/alta">Registro</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/ingresar">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="/productos" tabindex="-1" aria-disabled="true">Detalle de Producto</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;