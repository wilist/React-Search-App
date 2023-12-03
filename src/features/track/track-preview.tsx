import { FC } from "react"
import { Preview, PreviewPropsType } from "../ui/preview"

export const TrackPreview: FC<PreviewPropsType> = ({ type, title, src, onMore }) => {
    return (
        <Preview type={type} title={title} src={src} onMore={onMore} />
    )
}