import Image from "next/image";
import styled from "styled-components";
const StyledList = styled.li`
  width: 320;
  height: 350;
  list-style: none;
  background-color: yellow;
`;

export default function ArtPiecesList({ artist, name, imageSource }) {
  return (
    <>
      <ul>
        <StyledList>
          <Image
            width={100}
            height={100}
            src={imageSource}
            alt="artPieces"
          ></Image>
          <h1>Name: {name}</h1>
          <h2>Artist: {artist}</h2>
        </StyledList>
      </ul>
    </>
  );
}
