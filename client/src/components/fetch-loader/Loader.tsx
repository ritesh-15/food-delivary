import styled from "styled-components";

const LoaderContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 500;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    display: block;
    text-align: center;
    margin-top: 2em;
  }
`;

export const LoaderMain = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 25px;
    height: 25px;
    background: hsl(24, 100%, 52%);
    border-radius: 50%;
    margin: 0 0.5em;
    animation: bounce 1s ease-in-out infinite;

    @keyframes bounce {
      0% {
        transform: translateY(50%) scale(0.9);
      }
      50% {
        transform: translateY(0) scale(1);
      }
      100% {
        transform: translateY(50%) scale(0.9);
      }
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:last-child {
      animation-delay: 0.4s;
    }
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderMain>
        <div></div>
        <div></div>
        <div></div>
      </LoaderMain>
      <p>Processing</p>
    </LoaderContainer>
  );
};

export default Loader;
