import { Category_I } from "../Domain/category";

export const sortCategoriesByName = (list: Category_I[]): Category_I[] => {
    return list.sort((a, b) => a.category.localeCompare(b.category))
}