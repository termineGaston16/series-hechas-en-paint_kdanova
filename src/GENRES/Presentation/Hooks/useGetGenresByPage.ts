import { useQuery } from "react-query"
import { getGenresByPage } from "../../Infraestructure/genresAPI";

export const useGetGenresByPage = (
    limitSize: number,
    lastDocId: string | null
) => {
    return useQuery({
        queryKey: ['genres', limitSize, lastDocId],
        queryFn: () => getGenresByPage(limitSize, lastDocId),
        cacheTime: 0,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        retry: 0,
        staleTime: 60 * 60 * 1000
    })
};