import { collection, doc, getDoc, getDocs, limit, query, startAfter } from "firebase/firestore";
import { Genres_I } from "../Domain/genres";
import { db } from "../../UI/Infraestructure/Firebase/firebase";

export const getGenresByPage = async (
    limitSize: number,
    lastDocId: string | null
): Promise<Genres_I[]> => {

    const genresRef = collection(db, "GENEROS");
    let genresQuery;

    if (lastDocId) {
        const lastDocRef = doc(db, "GENEROS", lastDocId);
        const lastDocSnapshot = await getDoc(lastDocRef);

        if (!lastDocSnapshot.exists()) throw new Error('!lastDocSnapshot.exists()');

        genresQuery = query(genresRef, startAfter(lastDocSnapshot), limit(limitSize));
    } else {
        genresQuery = query(genresRef, limit(limitSize));
    }

    const querySnapshot = await getDocs(genresQuery);
    const genres: Genres_I[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Genres_I, 'id'>)
    }));

    return genres;
};
