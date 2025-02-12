import { useCallback, useEffect, useRef, useState } from "react"
import { Genres_I } from "../../Domain/genres"
import { useGetGenresByPage } from "../Hooks/useGetGenresByPage";
import AnswerAsyncronous from "../../../UI/AnswerAsyncronous/Presentation/Component/AnswerAsyncronous";

export default function ListGeneresWithProjects() {

    const [localGenres, setLocalGenres] = useState<Genres_I[]>([]);
    const [lastGenderID, setLastGenderID] = useState<string | null>(null);

    const { data, isError, isLoading, refetch } = useGetGenresByPage(
        3,
        lastGenderID
    );

    useEffect(() => {
        if (!data || data.length < 1) return;
        setLocalGenres(prevGenres => [...prevGenres, ...data]);
    }, [data]);

    const oberverRef = useRef<IntersectionObserver | null>(null)
    const lastItem = useCallback((node: HTMLElement | null) => {
        if (!node) return;
        if (oberverRef.current) oberverRef.current.disconnect();

        oberverRef.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setLastGenderID((prevID) => {
                    const lastID = [...localGenres].pop()?.id;
                    if (prevID !== lastID && lastID) return lastID;
                    return prevID;
                })
            }
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0.9
        });

        oberverRef.current.observe(node);
    }, [localGenres]);

    useEffect(() => {
        if (lastGenderID) refetch();
    }, [lastGenderID]);

    return (
        <>
            <ul>
                {localGenres.map((gender, index, array) => {
                    const isLast = index === array.length - 1;
                    const lowerCase = gender.gender.toLocaleLowerCase();
                    const firstCapitalLetter = lowerCase
                        .replace(/^./, char => char.toLocaleUpperCase());

                    return (
                        <li ref={isLast ? lastItem : null} key={gender.id}>
                            <h6>{firstCapitalLetter}</h6>
                            <hr />
                        </li>
                    );
                })}
            </ul>

            <AnswerAsyncronous
                isError={isError}
                isLoading={isLoading}
                errorComponent={
                    <div>
                        Error al obtener Géneros
                    </div>
                }
                loadingComponent={
                    <div>
                        Obteniendo nuevos Géneros...
                    </div>
                }
            />
        </>
    )
};