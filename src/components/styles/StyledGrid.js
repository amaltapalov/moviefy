import styled from "styled-components";

export const StyledGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    font-size: 42px;

    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
`;

export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-gap: 40px;
  position: relative;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
`;
