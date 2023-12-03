import { useAlbumService } from "../../features/album"
import { UseDetailsReturnType, useDetails } from "../use-details"

export const useAlbumDetails = (): UseDetailsReturnType => {
    const {fetchDetails} = useAlbumService()

    return useDetails({fetchDetails})
}

