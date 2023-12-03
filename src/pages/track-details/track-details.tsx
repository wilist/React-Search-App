import { FC, useEffect } from "react";
import { useTrackDetails } from "./use-track-details";
import { DetailsLayout } from "../../features/ui/details-layout";

export const TrackDetails: FC = () => {
    const {details, initiDetails} = useTrackDetails()

    useEffect(() => {
        initiDetails()
    }, [])

    return (
        <DetailsLayout 
            title={details?.name} 
            subtitle={details?.type} 
            cover={details?.album?.images[0]?.url}
        >
            <audio controls src={details?.preview_url} />
        </DetailsLayout>
    )
}