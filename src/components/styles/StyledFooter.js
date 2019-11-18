import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 40px 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .footer-logo {
    max-width: 150px;
    width: 100%;
  }
  a {
    color: ${props => props.theme.colors.normal};
    :hover {
      transition: all 0.3s;
      color: ${props => props.theme.colors.accent};
    }
  }
  span {
    padding: 0 10px;
    font-size: 30px;
  }

  @media (max-width: 500px) {
    span {
      font-size: 20px;
    }
  }
`;
