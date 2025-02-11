import { Genres_I } from "../Domain/genres";

export const sortGenresByName = (list: Genres_I[]): Genres_I[] => {
    if (list.length <= 0) return [];
    return [...list].sort((a, b) => a.gender.localeCompare(b.gender))
}