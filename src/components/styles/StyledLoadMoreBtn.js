import styled from "styled-components";

export const StyledLoadMoreBtn = styled.button`
  background: ${props => props.theme.colors.accent};
  width: 25%;
  min-width: 200px;
  color: #fff;
  transition: all 0.3s;
  border-radius: 100px;
  font-size: 28px;
  max-width: 1280px;
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  outline: none;
  border: 0;

  :hover {
    opacity: 0.8;
  }
`;
