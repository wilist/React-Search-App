import { useApi } from "../../api"

interface UseTrackServiceReturnType {
    fetchDetails: ({ id }: { id: string }) => Promise<any>;
}

export const useTrackService = (): UseTrackServiceReturnType => {
    const API = useApi()

    return {
        fetchDetails: async ({ id }) => {
            try {
                const response = await API.get(`/tracks/${id}`)
                return response.data
            } catch (e) {
                throw e
            }
        },
    }
}