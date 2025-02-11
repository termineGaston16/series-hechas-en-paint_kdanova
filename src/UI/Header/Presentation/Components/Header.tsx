import { Link } from "react-router-dom";
import { IoBookSharp, IoGameController, IoSettingsSharp, IoTvOutline } from "react-icons/io5";
import { JSX } from "react";
import ListCategoriesInHeader from "../../../NavBar/Presentation/Compontents/ListCategoriesInHeader";


export const giveLogo = (title: string): undefined | string | JSX.Element => {
    if (title.length <= 0) return;

    if (title.toLocaleLowerCase() === '/') return 'sp';
    if (title.toLocaleLowerCase() === 'juegos') return <IoGameController />;
    if (title.toLocaleLowerCase() === 'libros') return <IoBookSharp />;
    if (title.toLocaleLowerCase() === 'series') return <IoTvOutline />;
    if (title.toLocaleLowerCase() === 'configuración') return <IoSettingsSharp />;
}


export default function Header() {


    return (
        <header>
            <img src="" alt="" loading="lazy" />

            <hr />

            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>
                            SHenP Crew {giveLogo('/')}
                        </Link>
                    </li>
                    <li>
                        <ListCategoriesInHeader />
                    </li>
                    <li>
                        <Link to={'/configuracion'}>
                            Configuración {giveLogo('Configuración')}
                        </Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <span>
                @KDA/NOVA 2025 <br />
                @SHenP 2025
            </span>
        </header>
    )
};