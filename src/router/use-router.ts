import { useNavigate } from "react-router-dom"
import { ROUTER_PATHS } from "./router"

interface UseRouterReturnType {
    navigateToHome: () => void;
    navigateToAlbumDetails: ({ id }: { id: string }) => void;
    navigateToArtistDetails: ({ id }: { id: string }) => void;
    navigateToTrackDetails: ({ id }: { id: string }) => void;
}

export const useRouter = (): UseRouterReturnType => {
    const navigate = useNavigate()

    return {
        navigateToHome: () => {
            navigate(ROUTER_PATHS.HOME)
        },
        navigateToAlbumDetails: ({ id }) => {
            navigate(`${ROUTER_PATHS.ALBUM_DETAILS}/${id}`)
        },
        navigateToArtistDetails: ({ id }) => {
            navigate(`${ROUTER_PATHS.ARTIST_DETAILS}/${id}`)
        },
        navigateToTrackDetails: ({ id }) => {
            navigate(`${ROUTER_PATHS.TRACK_DETAILS}/${id}`)
        },
    }
}