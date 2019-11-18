import styled from "styled-components";

export const StyledLoadMoreBtn = styled.button`
  background: ${props => props.theme.colors.accent};
  width: 350px;
  /* min-width: 200px; */
  color: #fff;
  transition: all 0.3s;
  border-radius: 100px;
  font-size: 28px;
  max-width: 1280px;
  display: block;
  margin: 20px auto;
  padding: 10px 30px;
  outline: none;
  border: 0;

  :hover {
    opacity: 0.8;
  }

  @media (max-width: 468px) {
    font-size: 22px;
    width: 200px;
  }
`;
