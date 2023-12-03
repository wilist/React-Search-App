import { FC } from "react"
import { Track } from "./track";

interface TracksPropsType {
    data: Array<any>;
}

export const Tracks: FC<TracksPropsType> = ({ data }) => {
    return (
        <div>
            {data && data.map((item: any) => {
                return (
                    <Track name={item.name} preview_url={item.preview_url} />
                )
            })}
        </div>
    )
}