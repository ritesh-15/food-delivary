import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`;

export const LoginMain = styled.div`
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

export const LoginForm = styled.form`
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

  small {
    text-align: center;
    display: block;
    margin: 1em 0;
    color: ${({ theme }) => theme.colors.textLight};
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transition: all 0.25s ease-in;
    width: 100%;

    &:last-child {
      background: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const LoginFormControll = styled.div`
  margin-bottom: 2em;
`;

export const ForgotPassword = styled.div`
  a {
    font-size: 0.95rem;
    margin-top: 2em;
    display: block;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
