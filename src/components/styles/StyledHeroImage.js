import styled from "styled-components";

export const StyledHeroImage = styled.div`
  background: ${props =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0) 40%,
      rgba(145, 6, 29,0.65) 100%
    ),
    url('${props.image}'), #381954`};
  background-size: 100%, cover !important;
  background-position: center, center !important;
  width: 100%;
  height: 600px;
  position: relative;
  animation: animateHeroimage 1s;

  .heroimage-content {
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
  }

  .heroimage-text {
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: ${props => props.theme.colors.normal};

    h1 {
      font-size: 58px;

      @media screen and (max-width: 720px) {
        font-size: 45px;
      }
    }

    p {
      font-size: 22px;
      line-height: 26px;
      color: ${props => props.theme.colors.normal};

      @media screen and (max-width: 720px) {
        font-size: 16px;
      }
    }
  }

  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
