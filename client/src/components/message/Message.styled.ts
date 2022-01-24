import styled from "styled-components";

export const MessageWrapper = styled.div<{ error?: boolean }>`
  position: fixed;
  background: #fff;
  right: 0;
  top: 80px;
  margin-left: auto;
  width: 100%;
  max-width: 400px;
  padding: 1em;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 4px;
    background: ${({ error, theme }) =>
      error ? "red" : theme.colors.secondary};
    left: 0;
    top: 0;
    bottom: 0;
  }

  p {
    color: #000;
  }
`;
