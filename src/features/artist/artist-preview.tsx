import { FC } from "react"
import { Preview, PreviewPropsType } from "../ui/preview"

export const ArtistPreview: FC<PreviewPropsType> = ({ title, src, onMore, type }) => {
    return (
       <Preview type={type} title={title} src={src} onMore={onMore} />
    )
}