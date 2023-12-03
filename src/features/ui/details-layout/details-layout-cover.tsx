import { FC, ImgHTMLAttributes } from "react"
import styled from "styled-components"

export const DetailsLayoutCover: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ ...props }) => {
    return (
        <DetailsLayoutCoverImage {...props} />
    )
}

const DetailsLayoutCoverImage = styled.img`
    width: 100%;
    height: 600px;
    border-radius: 20px;
`