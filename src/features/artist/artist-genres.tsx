import styled from "styled-components"
import { ArtistGenre } from "./artist-genre"
import { FC } from "react";

interface ArtistGenresPropsType {
    data: Array<any>;
}

export const ArtistGenres: FC<ArtistGenresPropsType> = ({ data }) => {
    return (
        <ArtistGenresBody>
            {data && data.map((item: string) => (
                <ArtistGenre text={item} />
            ))}
        </ArtistGenresBody>
    )
}

const ArtistGenresBody = styled.div`
    display: flex;
    gap: 10px;
`