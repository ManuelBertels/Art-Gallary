import Image from "next/image";
import styled from "styled-components";
const StyledList = styled.li`
  width: 200;
  height: 250px;
  list-style: none;
  background-color: yellow;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
`;

const StyledDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;

  width: 320px;
`;

export default function ArtPiecesList({ artist, name, imageSource }) {
  return (
    <>
      <StyledDiv>
        <StyledList>
          <Image
            width={100}
            height={100}
            src={imageSource}
            alt="artPieces"
            style={{ marginLeft: 15, marginTop: 10 }}
          ></Image>
          <p style={{ marginLeft: 15, marginBottom: 0 }}>Name: {name}</p>
          <p style={{ marginLeft: 15, marginBottom: 10 }}>Artist: {artist}</p>
        </StyledList>
      </StyledDiv>
    </>
  );
}
