import styled from "styled-components";

export const AgreementContainer = styled.div`
  width: 70%;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    width: fit-content;
    margin-top: 2em;

    &:first-child {
      background: transparent;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  div {
    display: flex;
    align-items: flex-start;

    input {
      margin-right: 1em;
      margin-top: 0.5em;
      cursor: pointer;
    }
  }
`;
