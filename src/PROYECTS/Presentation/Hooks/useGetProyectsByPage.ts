import { useQuery } from "react-query"
import { getProyectsByPage } from '../../Infraestructure/proyectsAPI'

export const useGetProyectsByPage = (
    limitSize: number,
    lastDocId: string | null
) => {
    return useQuery({
        queryKey: ['categoriesByPage', limitSize, lastDocId],
        queryFn: () => getProyectsByPage(limitSize, lastDocId),
        cacheTime: 0,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        retry: 0,
        staleTime: 60 * 60 * 1000,
    });
}