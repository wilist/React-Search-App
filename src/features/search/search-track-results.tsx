import { FC } from "react";
import { useRouter } from "../../router/use-router"
import { TrackPreview } from "../track";

interface SearchTrackResultsPropsType {
    data: any;
}

export const SearchTrackResults: FC<SearchTrackResultsPropsType> = ({ data }) => {
    const {navigateToTrackDetails} = useRouter()

    return (
        <div>
            {data && data.map((item: any) => {
                return (
                    <TrackPreview 
                        type={item.type} 
                        title={item?.name} 
                        src={item.album.images[2]?.url} 
                        onMore={() => navigateToTrackDetails({ id: item.id })} 
                    />
                )
            })}
        </div>
    )
}