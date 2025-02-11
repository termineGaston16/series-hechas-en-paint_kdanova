import { collection, doc, getDoc, getDocs, limit, query, startAfter } from "firebase/firestore";
import { Category_I } from "../Domain/category";
import { db } from "../../Infraestructure/Firebase/firebase";

export const getCategoriesByPage = async (
    limitSize: number,
    lastDocId: string | null
): Promise<Category_I[]> => {

    const categoriesRef = collection(db, "CATEGORIAS");
    let categoriesQuery;

    if (lastDocId) {
        const lastDocRef = doc(db, "CATEGORIAS", lastDocId);
        const lastDocSnapshot = await getDoc(lastDocRef);

        if (!lastDocSnapshot.exists()) throw new Error('!lastDocSnapshot.exists()');

        categoriesQuery = query(categoriesRef, startAfter(lastDocSnapshot), limit(limitSize));
    } else {
        categoriesQuery = query(categoriesRef, limit(limitSize));
    }

    const querySnapshot = await getDocs(categoriesQuery);
    const categories: Category_I[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Category_I, 'id'>)
    }));

    return categories;
};
