import styled from "styled-components";

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: ${props => props.theme.colors.accent};

  .navigation-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;

    p {
      font-family: "Bebas Neue", cursive;
      font-size: 28px;
      float: left;
      color: #fff;
      padding-right: 10px;

      @media screen and (max-width: 768px) {
        font-size: 22px;
      }
    }
  }
`;
