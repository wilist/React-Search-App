import { FC, useEffect } from "react";
import { useArtistDetails } from "./use-artist-details";
import { DetailsLayout } from "../../features/ui/details-layout";
import { ArtistGenres } from "../../features/artist/artist-genres";

export const ArtistDetails: FC = () => {
    const {details, initiDetails} = useArtistDetails()

    useEffect(() => {
        initiDetails()
    }, [])

    return (
        <DetailsLayout 
            title={details?.name} 
            subtitle={details?.type}
            cover={details?.images[0]?.url}
        >
           <ArtistGenres data={details?.genres} />
        </DetailsLayout>
    )
}