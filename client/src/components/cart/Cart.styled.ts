import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: hsla(0, 0%, 80%, 0.5);
  z-index: 300;
`;

export const MainSidebar = styled.div`
  width: 500px;
  margin-left: auto;
  background: #fff;
  min-height: 100vh;
  max-width: 100%;
`;

export const MainContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1em;
  background: #fff;
  border-radius: 0.5em;
  margin-left: auto;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid hsl(0, 0%, 80%);
  padding-bottom: 1em;
  margin-bottom: 1em;

  h1 {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

export const Products = styled.div`
  overflow-y: auto;
  max-height: 70vh;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: hsl(0, 0%, 90%);
    cursor: pointer;
    border-radius: 1em;

    &:hover {
      background: hsl(0, 0%, 80%);
    }
  }
`;

export const SubTotal = styled.div`
  margin-top: 1em;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
    }

    &:nth-child(1) {
      background: #fff;
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      margin-right: 1em;
    }
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    justify-content: space-between;

    &:last-child {
      justify-content: flex-end;
      margin-bottom: 0;
    }

    h1 {
      font-size: 1.25rem;
      font-weight: 500;
    }

    span {
      font-weight: 500;
      font-size: 1.1rem;
      margin-left: 1em;
    }
  }
`;
