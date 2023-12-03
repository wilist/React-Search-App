import { useArtistService } from "../../features/artist"
import { UseDetailsReturnType, useDetails } from "../use-details"

export const useArtistDetails = (): UseDetailsReturnType => {
    const {fetchDetails} = useArtistService()
    
    return useDetails({fetchDetails})
}
