import styled from "styled-components";

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    min-height: 340px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 15px;
    animation: animateMovieThumb 0.5s;

    :hover {
      transform: scale(1.03);
      box-shadow: 0 7px 20px ${props => props.theme.colors.accent};
    }

    .clickable {
      cursor: pointer;
    }

    @keyframes animateMovieThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
