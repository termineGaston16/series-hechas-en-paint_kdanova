import { Link } from "react-router-dom";
import ListGeneresWithProjects from "../../../GENRES/Presentation/Components/ListGeneresWithProjects";

export default function Home() {
    return (
        <main>
            <div role="contentinfo">
                <h3>10 años haciendo historia</h3>
                <img src="" alt="" loading="lazy" />
                <h2>Series hechas en Paint</h2>
                <h3>¡Dibujamos por pasión!</h3>
            </div>

            <div role="definition">
                <p>
                    Entre amigos, forjamos mundos desde la imaginación, donde la creatividad y la
                    diversión se entrelazan en series, juegos, y cómics originales. <br />
                    ¡Bienvenido/a a SHEP!
                </p>
                <Link to={'/'}>
                    Descubre nuestros universos...
                </Link>
            </div>

            <div role="complementary">
                <p>
                    Vídeo parodia de nuestro amigo FerXo Animations!
                </p>

                <iframe
                    width="763"
                    height="516"
                    src="https://www.youtube.com/embed/Odaeaho0CQs"
                    title="SHENP BALL SUPER (DB Super Intro Parodia)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </div>

            <ListGeneresWithProjects />

        </main>
    )
};