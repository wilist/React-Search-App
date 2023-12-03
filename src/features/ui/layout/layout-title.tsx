import { FC, PropsWithChildren } from "react"
import styled from "styled-components"

export const LayoutTitle: FC<PropsWithChildren> = ({ children }) => {
    return (
        <LayoutTitleText>{children}</LayoutTitleText>
    )
}

const LayoutTitleText = styled.h1`
    margin: 0;
    font-weight: 500;
`