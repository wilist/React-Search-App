import { FC } from "react"
import styled from "styled-components";

export interface PreviewPropsType {
    type: string;
    title: string;
    src: string;
    onMore: () => void;
}

export const Preview: FC<PreviewPropsType> = ({ title, src, onMore, type }) => {
    return (
        <PreviewBody>
            <PreviewImage src={src} />
            <div>
                <PreviewType>{type}</PreviewType>
                <PreviewTitle>{title}</PreviewTitle>
                <button onClick={onMore}>More</button>
            </div>
        </PreviewBody>
    )
}

const PreviewBody = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`
const PreviewImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100px;
`
const PreviewTitle = styled.p`
    font-size: 20px;
   
`
const PreviewType = styled.p`
    color: #C0C0C0;
`