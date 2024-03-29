import styled from "styled-components";

export const StyledSearchBar = styled.div`
  width: 100%;
  height: 105px;
  background: ${props => props.theme.colors.background};
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  color: #fff;
`;

export const StyledSearchBarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 55px;
  background: ${props => props.theme.colors.lightBackground};
  margin: 0 auto;
  border-radius: 40px;
  position: relative;

  .fa-search {
    position: absolute;
    left: 20px;
    top: 15px;
    z-index: 1000;
    font-size: 25px;
  }

  input {
    font-size: 22px;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: #fff;
    box-sizing: border-box;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 18px;
    }
  }
`;
