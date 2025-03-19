import Image from "next/image";
import styled from "styled-components";
const StyledList = styled.li`
  display: flex;
  justify-content: center;
  width: 320;
  height: 350;
  list-style: none;
  background-color: yellow;
  margin-left: auto;
  margin-right: auto;
`;

export default function ArtPiecesList({ artist, name, imageSource }) {
  return (
    <>
      <ul style={{ margin: 0, padding: 0 }}>
        <StyledList>
          <Image
            width={100}
            height={100}
            src={imageSource}
            alt="artPieces"
          ></Image>
          <p>Name: {name}</p>
          <p>Artist: {artist}</p>
        </StyledList>
      </ul>
    </>
  );
}
