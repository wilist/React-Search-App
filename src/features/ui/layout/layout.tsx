import { FC, PropsWithChildren } from "react"
import styled from "styled-components"
import { LayoutTitle } from "./layout-title"
import { LayoutSubtitle } from "./layout-subtitle";

export interface LayoutPropsType extends PropsWithChildren {
    title: string;
    subtitle?: string;
}

export const Layout: FC<LayoutPropsType> = ({ children, title, subtitle }) => {
    return (
        <LayoutMain>
            <LayoutBody>
                <div>
                    {!!subtitle && <LayoutSubtitle>{subtitle}</LayoutSubtitle>}
                    <LayoutTitle>{title}</LayoutTitle>
                </div>
                {children}
            </LayoutBody>
        </LayoutMain>
    )
}

const LayoutMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
`
const LayoutBody = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`