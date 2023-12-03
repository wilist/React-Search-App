import { useApi } from "../../api"

interface UseAlbumServiceReturnType {
    fetchDetails: ({ id }: { id: string }) => Promise<any>;
}

export const useAlbumService = (): UseAlbumServiceReturnType => {
    const API = useApi()

    return {
        fetchDetails: async ({ id }) => {
            try {
                const response = await API.get(`/albums/${id}`)
                return response.data
            } catch (e) {
                throw e
            }
        },
    }
}