import { useCallback, useEffect, useRef, useState } from "react"
import { Proyect_I } from '../../Domain/proyect'
import { useGetProyectsByPage } from '../Hooks/useGetProyectsByPage'

export default function ListProjectsFilteredByGender() {

    const [proyectsLocal, setProyectsLocal] = useState<Set<Proyect_I>>(new Set());
    const [lastProjectID, setlastProjectID] = useState<string | null>(null);

    const { data, isLoading, isError, refetch } = useGetProyectsByPage(4, lastProjectID);

    useEffect(() => {
        if (!data || data.length < 1) return;

    }, [data])

    const callbackRef = useRef<IntersectionObserver | null>(null);
    const lastItem = useCallback((node: HTMLElement | null) => {
        if (!node) return;
        if (callbackRef.current) callbackRef.current.disconnect();

        callbackRef.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setlastProjectID(prevID => {
                    const lastID = [...proyectsLocal].pop()?.id
                    if (prevID !== lastID && lastID) return lastID;
                    return prevID;
                })
            }
        })

        useEffect(() => { refetch() }, [lastProjectID])

    }, [proyectsLocal]);



}