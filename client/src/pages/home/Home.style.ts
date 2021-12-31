import styled from "styled-components";

export const HomeContainer = styled.main`
  position: relative;
`;

export const HeroSection = styled.div`
  background: url("https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
    no-repeat center center/cover;
  padding-bottom: 3em;
  margin-top: 6em;
`;

export const HeroSectionInfo = styled.div`
  padding-top: 3em;
  z-index: 10;
  max-width: 45%;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1.5;
    letter-spacing: 0.15em;
    color: #fff;
  }

  p {
    font-size: 1.75rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 0.5em;
    font-weight: 300;
  }

  @media (max-width: 680px) {
    max-width: 100%;
    text-align: center;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

export const HeroSectionImages = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: 5;
  overflow: hidden;

  img {
    width: 100%;
    clip-path: polygon(22% 0, 100% 0%, 100% 99%, 0 100%);
    height: 100%;
    z-index: 5;
  }

  @media (max-width: 680px) {
    display: none;
  }
`;

export const HeroLocation = styled.div`
  margin-top: 2em;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    padding: 1.25em;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.2em 0 0 0.2em;
    font-size: 1rem;
    transition: all 0.3s ease-in;
    border-right: none;

    &:focus-within {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
    }
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-size: 1.25rem;
    transition: all 0.25s ease-in;
    border-radius: 0;
    border-radius: 0 0.2em 0.2em 0;
    font-weight: 600;
    height: 66px;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;

    input {
      width: 100%;
      border-right: 1px solid rgba(0, 0, 0, 0.2);
    }

    button {
      width: 100%;
      margin-top: 1em;
    }
  }
`;
