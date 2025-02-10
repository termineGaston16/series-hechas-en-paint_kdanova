import { useQuery } from "react-query"
import { getCategoriesByPage } from "../../Infraestructure/navbarAPI";

export const useGetCategoriesByPage = (
    limitSize: number,
    lastDocId: string | null
) => {
    return useQuery({
        queryKey: ['categoriesByPage', limitSize, lastDocId],
        queryFn: () => getCategoriesByPage(limitSize, lastDocId),
        cacheTime: 0,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        retry: 0,
        staleTime: 60 * 60 * 1000,
    });
}