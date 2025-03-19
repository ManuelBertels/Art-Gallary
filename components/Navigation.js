import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledUl>
      <StyledLink href="/">Gallery</StyledLink>
      <StyledLink href="/Spotlight/singleArt">Spotlight</StyledLink>
      <StyledLink href="/Gallery/index">Favorites</StyledLink>
    </StyledUl>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  &:hover {
    background-color: pink;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 9px;
  padding: 0;
`;
