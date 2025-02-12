import { useCallback, useEffect, useRef, useState } from "react";
import { Category_I } from "../../Domain/category";
import { useGetCategoriesByPage } from "../Hooks/useGetCategoriesByPage";
import { sortCategoriesByName } from "../../Application/navbarAPP";
import { Link } from "react-router-dom";
import AnswerAsyncronous from "../../../AnswerAsyncronous/Presentation/Component/AnswerAsyncronous";
import { giveLogo } from "../../../Header/Presentation/Components/Header";

export default function ListCategoriesInHeader() {
    const [categoriesLocal, setCategoriesLocal] = useState<Category_I[]>([]);
    const [lastCategoryID, setLastCategoryID] = useState<string | null>(null);

    const { data, isError, isLoading, refetch } = useGetCategoriesByPage(
        4,
        lastCategoryID
    );

    useEffect(() => {
        if (!data || data.length === 0) return;
        setCategoriesLocal(prevCategories => [...prevCategories, ...data]);
    }, [data]);

    const observerRef = useRef<IntersectionObserver | null>(null);

    const lastItem = useCallback((node: HTMLElement | null) => {
        if (!node) return;
        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setLastCategoryID((prevID) => {
                    const lastItem = [...categoriesLocal].pop()?.id;
                    if (prevID !== lastItem && lastItem) return lastItem;
                    return prevID;
                });
            }
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0.9
        });

        observerRef.current.observe(node);
    }, [categoriesLocal]);

    useEffect(() => {
        if (lastCategoryID) refetch();
    }, [lastCategoryID]);

    const sortedCategories = sortCategoriesByName(categoriesLocal);

    return (<>
        {
            categoriesLocal.length > 0
            &&
            <ul>
                {sortedCategories.map((category, index, array) => {
                    const isLast = index === array.length - 1;
                    const lowerCase = category.category.toLocaleLowerCase();
                    const firstCapitalLetter = lowerCase
                        .replace(/^./, char => char.toLocaleUpperCase());

                    return (
                        <li ref={isLast ? lastItem : null} key={category.id}>
                            <Link to={`/${lowerCase}`}>
                                {firstCapitalLetter} {giveLogo(lowerCase)}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        }

        <AnswerAsyncronous
            isError={isError}
            isLoading={isLoading}
            errorComponent={
                <div>
                    Error al obtener Categorías
                </div>
            }
            loadingComponent={
                <div>
                    Obteniendo nuevas Categorías...
                </div>
            }
        />
    </>
    );
}
