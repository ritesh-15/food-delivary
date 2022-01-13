import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  right: 0;
  z-index: 200;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  background: #fff;
  border-radius: 0.5em;
  padding: 1em;
  max-width: 400px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  animation: animate 0.5s ease-in 1;

  @keyframes animate {
    0% {
      transform: scale(1.01) translateY(-10px);
    }
    100% {
      transform: scale(1) translateY(0px);
    }
  }
`;

export const Content = styled.div`
  margin-top: 1em;

  h1 {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;
  }

  p {
    text-align: center;
    display: block;
    margin-top: 0.5rem;
    font-size: 0.95rem;

    span {
      font-weight: 500;
    }
  }

  button {
    background: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    display: block;
    margin: 0 auto;
    margin-top: 1em;
    width: 100px;
  }
`;
