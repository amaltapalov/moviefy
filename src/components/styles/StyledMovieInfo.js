import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const StyledMovieInfo = styled.div`
  background: ${props =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : "#111517"};
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  padding: 40px 0;
  animation: animateMovieinfo 1s;

  .movieinfo-content {
    max-width: 1280px;
    width: 95%;
    min-height: 450px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 20px;
    position: relative;
  }

  .movieinfo-thumb {
    width: 300px;
    float: left;

    @media screen and (max-width: 768px) {
      width: 100% !important;
    }

    img {
      border-radius: 20px 0 0 20px;
      @media (max-width: 768px) {
        border-radius: 20px 20px 0 0;
      }
    }
  }

  .movieinfo-text {
    padding: 40px;
    overflow: hidden;

    h1 {
      font-size: 52px;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 40px !important;
      }
    }

    h3 {
      font-size: 24px;
      line-height: 0;
      margin-top: 30px;
    }

    p {
      font-size: 18px;
      line-height: 26px;
    }
  }

  .movieinfo-data {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
      display: grid;
      grid-template-columns: repeat(2, minmax(100px, 1fr));
      grid-gap: 10px;
    }
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 25px;
    margin: 0px 0 0 0;
  }

  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
