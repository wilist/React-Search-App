import { FC } from "react";
import { useRouter } from "../../router/use-router"
import { ArtistPreview } from "../artist";

interface SearchArtistResultsPropsType {
    data: any;
}

export const SearchArtistResults: FC<SearchArtistResultsPropsType> = ({ data }) => {
    const {navigateToArtistDetails} = useRouter()

    return (
        <div>
            {data && data.map((item: any) => {
                return (
                    <ArtistPreview 
                        type={item.type} 
                        title={item?.name} 
                        src={item.images[2]?.url} 
                        onMore={() => navigateToArtistDetails({ id: item.id })} 
                    />
                )
            })}
        </div>
    )
}