import { FC } from "react"
import styled from "styled-components";

interface ArtistGenrePropsType {
    text: string;
}

export const ArtistGenre: FC<ArtistGenrePropsType> = ({ text }) => {
    return (
        <ArtistGenreBody>   
            <ArtistGenreText>{text}</ArtistGenreText>
        </ArtistGenreBody>
    )
}

const ArtistGenreBody = styled.div`
    padding: 20px;
    border-radius: 20px;
    background-color: #F0F8FF;
`

const ArtistGenreText = styled.p`
    fond-size: 16px;
    margin: 0;
    font-weight: bold;
    color: black;
`