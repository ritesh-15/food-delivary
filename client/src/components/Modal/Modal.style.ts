import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 200;
`;

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  padding: 2em;
  height: fit-content;
  border-radius: 0.2em;
  margin-top: 4em;
`;

export const ModalHeader = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
`;
