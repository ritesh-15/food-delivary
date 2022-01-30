import styled from "styled-components";

export const MessageWrapper = styled.div<{ error?: boolean }>`
  position: fixed;
  background: ${({ error }) => (!error ? "#e8ffde" : "#fae3de")};
  right: 0;
  top: 60px;
  left: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  padding: 1.25em;
  border-radius: 4px;
  z-index: 500;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  p {
    color: ${({ error }) => (!error ? "#236607" : "#eb4444")};
  }
`;
