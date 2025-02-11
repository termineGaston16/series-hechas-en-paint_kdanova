import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>
                        ¿Quiénes somos?
                    </Link>
                </li>
                <li>
                    <Link to={'/generos'}>
                        Géneros
                    </Link>
                </li>
                <li>
                    <Link to={'/proyectos-perdidos'}>
                        Proyectos Perdidos
                    </Link>
                </li>
                <li>
                    <Link to={'/buscar'}>
                        Buscar
                    </Link>
                </li>
            </ul>
        </nav>
    )
}