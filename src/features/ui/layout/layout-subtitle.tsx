import { FC, PropsWithChildren } from "react"
import styled from "styled-components"

export const LayoutSubtitle: FC<PropsWithChildren> = ({ children }) => {
    return (
        <LayoutSubtitleText>{children}</LayoutSubtitleText>
    )
}

const LayoutSubtitleText = styled.h3`
    color: #C0C0C0;
    margin: 0;
    font-weight: 500;
`