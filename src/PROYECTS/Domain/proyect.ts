import { Genres_I } from "../../GENRES/Domain/genres";
import { Category_I } from "../../UI/NavBar/Domain/category";

export interface Proyect_I {
    id: string,
    official_title: string,
    name_section: string,
    category: Category_I['category'],
    producer: string,
    gender: Genres_I['gender'],
    release_date: string,
    intro_link: string,
    logo_link: string,
    front_page: string,
    gallery_link: string[],
    access_link: string,
    description: string
}