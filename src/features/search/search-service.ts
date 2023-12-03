import { useApi } from "../../api"

export interface UseSearchServiceReturnType {
    fetch: ({ search }: { search: string }) => Promise<any>;
}

export const useSearchService = (): UseSearchServiceReturnType => {
    const API = useApi()

    return {
        fetch: async ({ search }) => {
            try {
                const response = await API.get(`/search?q=${search}&type=track,album,artist&limit=2`)
                return response.data
            } catch (e) {
                console.log(e)
            }
        },
    }
}