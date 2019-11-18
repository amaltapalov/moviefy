import styled from "styled-components";

export const StyledHeader = styled.div`
  background: ${props => props.theme.colors.background};
  padding: 20px;

  .header-content {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 120px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
