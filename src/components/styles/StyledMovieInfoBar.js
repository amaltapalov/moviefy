import styled from "styled-components";

export const StyledMovieInfoBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100px;
  height: auto;
  background: ${props => props.theme.colors.lightBackground};
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 16px;

  .movieinfobar-content {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }

  .movieinfobar-content-col {
    padding: 0 20px;
    display: flex;
    align-items: center;
  }

  .fa-time,
  .fa-revenue,
  .fa-budget {
    padding-right: 10px;
  }

  @media screen and (max-width: 768px) {
    .fa-time,
    .fa-revenue,
    .fa-budget {
      display: none;
    }
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
