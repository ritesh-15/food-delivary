import styled from "styled-components";

export const MessageWrapper = styled.div<{ error?: boolean }>`
  position: fixed;
  background: #333633;
  right: 0;
  bottom: 10px;
  left: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  padding: 1em;
  border-radius: 4px;
  z-index: 500;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  p {
    color: #fff;
  }
`;
