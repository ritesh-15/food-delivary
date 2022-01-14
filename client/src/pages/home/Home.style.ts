import styled from "styled-components";

export const HomeContainer = styled.main`
  position: relative;
`;

export const HeroSection = styled.div`
  background: url("https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    no-repeat center center/cover;
  padding-bottom: 3em;
  position: relative;
  margin-top: 2em;

  &::after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    height: 100%;
    z-index: -1;
  }
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

  @media (max-width: 768px) {
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

export const JoinWithUsContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    margin: 0 auto;
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 0.5em;
    color: ${({ theme }) => theme.colors.textLight};
  }

  button {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    margin: 0 auto;
    max-width: 200px;
    margin-top: 1em;
  }
`;

export const FeaturesContaienr = styled.div`
  background: #2b1e16;

  margin: 2em 0;
  padding: 1em 0;

  @media (max-width: 768px) {
    div {
      flex-direction: column;
    }
  }
`;

export const FeatureCard = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    height: 200px;
    display: flex;
    align-items: center;

    img {
      width: 250px;
      height: 100%;
    }
  }

  h1 {
    text-align: center;
    margin: 0.5em 0;
    font-weight: 500;
  }

  p {
    text-align: center;
    display: block;
    width: 70%;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textLight};
  }

  @media (max-width: 768px) {
    margin: 1em 0;
  }
`;

export const FooterContainer = styled.div``;
