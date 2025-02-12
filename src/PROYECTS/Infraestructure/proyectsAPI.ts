import { collection, doc, getDoc, getDocs, limit, query, startAfter } from "firebase/firestore";
import { db } from "../../UI/Infraestructure/Firebase/firebase";
import { Proyect_I } from "../Domain/proyect";

export const getProyectsByPage = async (
    limitSize: number,
    lastDocId: string | null
): Promise<Set<Proyect_I>> => {

    const proyectsRef = collection(db, "PROYECTOS");
    let proyectsQuery;

    if (limitSize <= 0) new Set();

    if (lastDocId) {
        const lastDocRef = doc(db, "PROYECTOS", lastDocId);
        const lastDocSnapshot = await getDoc(lastDocRef);

        if (!lastDocSnapshot.exists()) throw new Error('!lastDocSnapshot.exists()');

        proyectsQuery = query(proyectsRef, startAfter(lastDocSnapshot), limit(limitSize));
    } else {
        proyectsQuery = query(proyectsRef, limit(limitSize));
    }

    const querySnapshot = await getDocs(proyectsQuery);
    const proyect = new Set<Proyect_I>()

    const proyects: Proyect_I[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Proyect_I, 'id'>)
    }));

    return proyects;
};