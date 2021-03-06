import styled from "styled-components";

export const VerifyContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 77px);
`;

export const VerifyMain = styled.div`
  margin-top: 4em;
  background: ${({ theme }) => theme.colors.bg};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  padding: 1em;
  height: fit-content;
  width: 400px;
  border-radius: 0.25em;
  animation: popup 0.8s ease 1;

  @keyframes popup {
    0% {
      transform: translateY(-5%) scale(0.98);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }
`;

export const VerifyForm = styled.form`
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    margin-top: 0.5em;
    margin-bottom: 2em;
    font-size: 0.95rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 1em;
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: 300;

    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transition: all 0.25s ease-in;
    width: 100%;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

export const VerifyFormControll = styled.div`
  margin-bottom: 2em;
`;

export const ResendButton = styled.div`
  width: 100%;
  margin-top: 1rem;

  button {
    background: transparent !important;
    color: ${({ theme }) => theme.colors.textLight};
    width: fit-content;
    padding: 0;
    font-size: 0.95rem;
    margin-bottom: 1em;
    text-align: center;
    width: 100%;

    &:hover {
      background: transparent;
    }
  }
`;
