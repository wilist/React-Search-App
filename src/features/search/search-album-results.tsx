import { FC } from "react";
import { useRouter } from "../../router/use-router"
import { AlbumPreview } from "../album"

interface SearchAlbumResultsPropsType {
    data: any;
}

export const SearchAlbumResults: FC<SearchAlbumResultsPropsType> = ({ data }) => {
    const {navigateToAlbumDetails} = useRouter()

    return (
        <div>
            {data && data.map((item: any) => {
                return (
                    <AlbumPreview 
                        type={item.type} 
                        title={item?.name} 
                        src={item.images[2]?.url} 
                        onMore={() => navigateToAlbumDetails({ id: item.id })} 
                    />
                )
            })}
        </div>
    )
}