import { useCallback, useEffect, useRef, useState } from "react";
import { Category_I } from "../../Domain/category";
import { useGetCategoriesByPage } from "../Hooks/useGetCategoriesByPage";
import { sortCategoriesByName } from "../../Application/navbarAPP";

export default function ListCategoriesInNavbar() {
    const [categoriesLocal, setCategoriesLocal] = useState<Category_I[]>([]);
    const [lastCategoryID, setLastCategoryID] = useState<string | null>(null);

    const { data, isError, isLoading, refetch } = useGetCategoriesByPage(4, lastCategoryID);

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
                    const lastItem = categoriesLocal[categoriesLocal.length - 1];
                    return prevID !== lastItem?.id ? lastItem?.id : prevID;
                });
            }
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        });

        observerRef.current.observe(node);
    }, [categoriesLocal]);

    useEffect(() => {
        if (lastCategoryID) refetch();
    }, [lastCategoryID]);

    const sortedCategories = sortCategoriesByName(categoriesLocal);

    return (
        <ul>
            {sortedCategories.map((category, index, array) => {
                const isLast = index === array.length - 1;
                return (
                    <li ref={isLast ? lastItem : null} key={category.id}>
                        {category.category}
                    </li>
                );
            })}
        </ul>
    );
}
