import { FC } from "react";
import { useHome } from "./use-home";
import { SearchAlbumResults, SearchArtistResults, SearchInput, SearchTrackResults } from "../../features/search";
import { Layout } from "../../features/ui/layout";

export const Home: FC = () => {
    const {details, find} = useHome()
   
    return (
        <Layout title="Search">
            <SearchInput
                placeholder="album, track, artist"
                onChange={(e) => {
                    find({ searchString: e.target.value })
                }} 
            />
            <div>
                <SearchAlbumResults data={details?.albums?.items} />
                <SearchTrackResults data={details?.tracks?.items} />
                <SearchArtistResults data={details?.artists?.items} />
            </div>
        </Layout>
    )
}