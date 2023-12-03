import { FC } from "react"
import { Layout, LayoutPropsType } from "../layout"
import { DetailsLayoutCover } from "./details-layout-cover"

interface DetailsLayoutPropsType extends LayoutPropsType {
    cover: string;
}

export const DetailsLayout: FC<DetailsLayoutPropsType> = ({ children, title, subtitle, cover }) => {
    return (
        <Layout title={title} subtitle={subtitle}>
            <DetailsLayoutCover src={cover} />
            {children}
        </Layout>
    )
}