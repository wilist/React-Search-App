import { FC, useEffect } from "react";
import { useAlbumDetails } from "./use-album-details";
import { DetailsLayout } from "../../features/ui/details-layout";
import { Tracks } from "../../features/track";

export const AlbumDetails: FC = () => {
    const {details, initiDetails} = useAlbumDetails()

    useEffect(() => {
        initiDetails()
    }, [])

    return (
        <DetailsLayout 
            title={details?.name} 
            subtitle={details?.type}
            cover={details?.images[0]?.url}
        >
            <Tracks data={details?.tracks?.items} />
        </DetailsLayout>
    )
}