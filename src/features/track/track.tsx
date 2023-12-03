import { FC } from "react"

interface TrackPropsType {
    name: string;
    preview_url: string;
}

export const Track: FC<TrackPropsType> = ({ name, preview_url }) => {
    return (
        <div>
            <p>{name}</p>
            <audio controls src={preview_url} />
        </div>
    )
}