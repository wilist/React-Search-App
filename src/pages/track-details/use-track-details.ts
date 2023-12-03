import { useTrackService } from "../../features/track"
import { UseDetailsReturnType, useDetails } from "../use-details"

export const useTrackDetails = (): UseDetailsReturnType => {
    const {fetchDetails} = useTrackService()
    
    return useDetails({fetchDetails})
}
