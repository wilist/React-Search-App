import { useApi } from "../../api"

interface UseArtistServiceReturnType {
    fetchDetails: ({ id }: { id: string }) => Promise<any>;
}

export const useArtistService = (): UseArtistServiceReturnType => {
    const API = useApi()

    return {
        fetchDetails: async ({ id }) => {
            try {
                const response = await API.get(`/artists/${id}`)
                return response.data
            } catch (e) {
                throw e
            }
        },
    }
}