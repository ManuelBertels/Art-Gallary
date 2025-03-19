import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledUl>
      <StyledLink href="/">Navigation</StyledLink>
      <StyledLink href="/Spotlight/singleArt">Spotlight</StyledLink>
      <StyledLink href="/Gallery/index">Gallery</StyledLink>
    </StyledUl>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  border: solid 2px black;
  margin: 10px;
  font-size: 25px;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
