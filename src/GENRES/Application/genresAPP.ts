import { Proyect_I } from "../../PROYECTS/Domain/proyect";
import { Genres_I } from "../Domain/genres";

export const sortGenresByName = (list: Genres_I[]): Genres_I[] => {
    if (list.length <= 0) return [];
    return [...list].sort((a, b) => a.gender.localeCompare(b.gender))
}

export const filterProjectsByGenres = (
    genderType: string,
    list: Set<Proyect_I>
): Set<Proyect_I> => {

    const lowercase = genderType.toLocaleLowerCase();

    if (lowercase.trim() === '') return new Set();
    if (list.size <= 0) return new Set();

    return new Set([...list].filter(proyect => proyect.category.toLocaleLowerCase() === lowercase))
}
